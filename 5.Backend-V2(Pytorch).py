# 5.Backend-V2(Pytorch).py
# ============================================================================
# 🥭 MANGO PEST DETECTION - INFERENCE API (FLASK + PYTORCH)
# Production-Ready Inference Server
# ============================================================================

import os
import sys
import io
import time
import logging
import traceback
from datetime import datetime
from pathlib import Path

import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS
from torchvision import transforms

# ============================================================================
# 1. LOGGING CONFIGURATION
# ============================================================================
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("api_server.log", encoding='utf-8')
    ]
)
logger = logging.getLogger(__name__)

# ============================================================================
# 2. MODEL ARCHITECTURE
# ============================================================================
class CUDAOptimizedCNN(nn.Module):
    """
    Architecture must match training script exactly.
    """
    def __init__(self, num_classes: int, img_size: int = 224):
        super(CUDAOptimizedCNN, self).__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.Conv2d(32, 32, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
            nn.Dropout2d(0.1),
            
            nn.Conv2d(32, 64, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
            nn.Dropout2d(0.1),
            
            nn.Conv2d(64, 128, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 128, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
            nn.Dropout2d(0.2),
            
            nn.Conv2d(128, 256, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.AdaptiveAvgPool2d(1)
        )
        
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(256, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.4),
            nn.Linear(512, num_classes)
        )
        self._initialize_weights()

    def _initialize_weights(self):
        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode='fan_out', nonlinearity='relu')
                if m.bias is not None:
                    nn.init.constant_(m.bias, 0)
            elif isinstance(m, nn.BatchNorm2d):
                nn.init.constant_(m.weight, 1)
                nn.init.constant_(m.bias, 0)
            elif isinstance(m, nn.Linear):
                nn.init.kaiming_normal_(m.weight, mode='fan_out', nonlinearity='relu')
                nn.init.constant_(m.bias, 0)

    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x

# ============================================================================
# 3. CONFIGURATION & GLOBAL VARIABLES
# ============================================================================
app = Flask(__name__)
CORS(app)  # Enable CORS for Frontend connection

MODEL_PATH = "best_model-Fish.pt"
DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Global State
model = None
class_names = []
checkpoint_info = {}
INFERENCE_TRANSFORM = None

# ============================================================================
# 4. MODEL LOADING
# ============================================================================
def load_model_checkpoint(path: str):
    global model, class_names, checkpoint_info, INFERENCE_TRANSFORM
    
    if not os.path.exists(path):
        logger.error(f"❌ Model file not found: {path}")
        raise FileNotFoundError(f"Model file not found: {path}")

    logger.info(f"🚀 Loading model from {path}...")
    logger.info(f"   Device: {DEVICE}")

    try:
        checkpoint = torch.load(path, map_location=DEVICE, weights_only=False)
        
        class_names = checkpoint.get('class_names', [])
        img_size = checkpoint.get('img_size', 224)
        num_classes = checkpoint.get('num_classes', len(class_names))
        
        logger.info(f"   Checkpoint Info:")
        logger.info(f"      → Classes: {num_classes} | {class_names}")
        logger.info(f"      → Image Size: {img_size}x{img_size}")
        logger.info(f"      → Epoch: {checkpoint.get('epoch', 'N/A')}")
        logger.info(f"      → Val Acc: {checkpoint.get('val_acc', 'N/A')}")

        model = CUDAOptimizedCNN(num_classes=num_classes, img_size=img_size)
        model.load_state_dict(checkpoint['model_state_dict'])
        model.to(DEVICE)
        model.eval()

        INFERENCE_TRANSFORM = transforms.Compose([
            transforms.Resize((img_size, img_size)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
        ])

        checkpoint_info = {
            'path': path,
            'loaded_at': datetime.now().isoformat(),
            'architecture': checkpoint.get('model_architecture', 'CUDAOptimizedCNN'),
            'img_size': img_size,
            'num_classes': num_classes
        }
        logger.info("✅ Model loaded successfully.")
        return True

    except Exception as e:
        logger.error(f"❌ Failed to load model: {e}")
        logger.error(traceback.format_exc())
        raise e

# ============================================================================
# 5. API ENDPOINTS
# ============================================================================
@app.route('/predict', methods=['POST'])
def predict():
    if model is None or INFERENCE_TRANSFORM is None:
        return jsonify({'success': False, 'error': 'Model not loaded'}), 503

    try:
        if 'image' not in request.files:
            return jsonify({'success': False, 'error': 'No image file provided'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'success': False, 'error': 'No selected file'}), 400

        image_bytes = file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        
        input_tensor = INFERENCE_TRANSFORM(image).unsqueeze(0).to(DEVICE)

        start_time = time.time()
        with torch.no_grad():
            output = model(input_tensor)
            probabilities = F.softmax(output, dim=1)
        inference_time = time.time() - start_time
        
        probs_np = probabilities.cpu().numpy()[0]
        pred_idx = int(np.argmax(probs_np))
        confidence = float(probs_np[pred_idx])
        
        # Safety check for class names
        safe_classes = class_names if len(class_names) >= len(probs_np) else class_names + [f"Class_{i}" for i in range(len(class_names), len(probs_np))]
        
        predictions_list = [
            {'class': safe_classes[i], 'probability': round(float(p), 4)}
            for i, p in enumerate(probs_np)
        ]
        predictions_list.sort(key=lambda x: x['probability'], reverse=True)

        response = {
            'success': True,
            'prediction': {
                'class': safe_classes[pred_idx],
                'confidence': round(confidence, 4),
                'index': pred_idx
            },
            'all_probabilities': predictions_list,
            'inference_time_ms': round(inference_time * 1000, 2),
            'model_info': {
                'device': str(DEVICE)
            }
        }

        logger.info(f"🔮 Prediction: {safe_classes[pred_idx]} ({confidence:.2%}) in {inference_time*1000:.1f}ms")
        return jsonify(response), 200

    except Exception as e:
        logger.error(f"❌ Prediction error: {e}")
        logger.error(traceback.format_exc())
        return jsonify({'success': False, 'error': 'Internal server error', 'details': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    is_loaded = model is not None
    return jsonify({
        'status': 'healthy' if is_loaded else 'degraded',
        'service': 'Mango Pest Detection API',
        'model_loaded': is_loaded,
        'device': str(DEVICE),
        'timestamp': datetime.now().isoformat()
    }), 200

@app.route('/classes', methods=['GET'])
def get_classes():
    return jsonify({
        'num_classes': len(class_names),
        'class_names': class_names
    }), 200

# ============================================================================
# 6. MAIN ENTRY POINT
# ============================================================================
if __name__ == '__main__':
    logger.info("="*80)
    logger.info("🥭 MANGO PEST DETECTION API SERVER STARTING")
    logger.info("="*80)
    try:
        load_model_checkpoint(MODEL_PATH)
        
        logger.info("-"*80)
        logger.info("🌍 Server Configuration:")
        logger.info(f"   Host: 0.0.0.0 | Port: 5000")
        logger.info(f"   Model: {MODEL_PATH}")
        logger.info("-"*80)
        logger.info("✅ Server Ready. Frontend can connect to http://localhost:5000")
        logger.info("="*80)
        
        app.run(host='0.0.0.0', port=5000, debug=False, threaded=True)
        
    except Exception as e:
        logger.critical(f"🚫 Failed to start server: {e}")
        sys.exit(1)

        
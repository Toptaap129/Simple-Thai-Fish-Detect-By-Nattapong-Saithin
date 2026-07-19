/**
 * 🐟 Fish Database
 * โครงสร้าง: { 'ชื่อปลา': { classification, type, info: [] } }
 * 💡 Tip: หากต้องการกรอง/เรียงลำดับบ่อยๆ แนะนำให้เปลี่ยนเป็น Array of Objects
 */
const fishDatabase = {
  'Bangus': {
    classification: 'Chanos chanos (Family: Chanidae)',
    type: 'ปลาน้ำกร่อย/ทะเล',
    info: [
      'ชื่อสามัญ: Bangus, Milkfish',
      'ชื่อวิทยาศาสตร์: Chanos chanos',
      'ถิ่นกำเนิด: อินโด-แปซิฟิก, ปลาประจำชาติฟิลิปปินส์',
      'พฤติกรรม: กินพืชและสาหร่ายเป็นหลัก',
      'อายุขัย: 8-15 ปี (ในธรรมชาติ)'
    ]
  },
  'Big Head Carp': {
    classification: 'Hypophthalmichthys nobilis (Family: Cyprinidae)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Bighead Carp',
      'ชื่อวิทยาศาสตร์: Hypophthalmichthys nobilis',
      'ถิ่นกำเนิด: จีนและเอเชียตะวันออก',
      'พฤติกรรม: กินแพลงก์ตอน (Planktivore)',
      'อายุขัย: 15-20 ปี'
    ]
  },
  'Black Sea Sprat': {
    classification: 'Clupeonella cultriventris (Family: Clupeidae)',
    type: 'ปลาทะเล',
    info: [
      'ชื่อสามัญ: Black Sea Sprat',
      'ชื่อวิทยาศาสตร์: Clupeonella cultriventris',
      'ถิ่นกำเนิด: ทะเลดำ, ทะเลแคสเปียน',
      'พฤติกรรม: ปลาขนาดเล็ก อาศัยเป็นฝูง',
      'อายุขัย: สูงสุด 5 ปี'
    ]
  },
  'Black Spotted Barb': {
    classification: 'Dawkinsia filamentosa (Family: Cyprinidae)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Black-spotted Barb',
      'ชื่อวิทยาศาสตร์: Dawkinsia filamentosa',
      'ถิ่นกำเนิด: ศรีลังกาและอินเดียตอนใต้',
      'พฤติกรรม: ปลาสวยงาม ชอบน้ำไหล',
      'อายุขัย: 4-6 ปี (ในตู้เลี้ยง)'
    ]
  },
  'Catfish': {
    classification: 'Order: Siluriformes',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Catfish (ปลาดุก)',
      'ชื่อวิทยาศาสตร์: หลากหลายสกุล (Clarias, Pangasius)',
      'ถิ่นกำเนิด: พบทั่วโลกในแหล่งน้ำจืด',
      'พฤติกรรม: กินเนื้อ/กินทุกอย่าง, มีหนวดรับสัมผัส',
      'อายุขัย: 8-20 ปี (ตามสายพันธุ์)'
    ]
  },
  'Climbing Perch': {
    classification: 'Anabas testudineus (Family: Anabantidae)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Climbing Perch (ปลาหมอ)',
      'ชื่อวิทยาศาสตร์: Anabas testudineus',
      'ถิ่นกำเนิด: เอเชียใต้และตะวันออกเฉียงใต้',
      'พฤติกรรม: มีอวัยวะช่วยหายใจ ขึ้นบกได้ระยะสั้น',
      'อายุขัย: 5-8 ปี'
    ]
  },
  'Fourfinger Threadfin': {
    classification: 'Eleutheronema tetradactylum (Family: Polynemidae)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Fourfinger Threadfin, Rawas',
      'ชื่อวิทยาศาสตร์: Eleutheronema tetradactylum',
      'ถิ่นกำเนิด: อินโด-แปซิฟิกตะวันตก',
      'พฤติกรรม: อาศัยพื้นท้องทะเลโคลน, เนื้อคุณภาพสูง',
      'อายุขัย: 8-12 ปี'
    ]
  },
  'Freshwater Eel': {
    classification: 'Genus: Anguilla (Family: Anguillidae)',
    type: 'ปลาน้ำจืด/อพยพ',
    info: [
      'ชื่อสามัญ: Freshwater Eel (ปลาไหล)',
      'ชื่อวิทยาศาสตร์: Anguilla spp.',
      'ถิ่นกำเนิด: เขตร้อนและอบอุ่นทั่วโลก',
      'พฤติกรรม: อพยพไปวางไข่ในทะเลลึก',
      'อายุขัย: 5-70 ปี (ตามสายพันธุ์)'
    ]
  },
  'Gilt-Head Bream': {
    classification: 'Sparus aurata (Family: Sparidae)',
    type: 'ปลาทะเล',
    info: [
      'ชื่อสามัญ: Gilt-head Bream',
      'ชื่อวิทยาศาสตร์: Sparus aurata',
      'ถิ่นกำเนิด: เมดิเตอร์เรเนียนและแอตแลนติกตะวันออก',
      'พฤติกรรม: นิยมเลี้ยงเชิงพาณิชย์ เนื้อนุ่ม',
      'อายุขัย: 11-15 ปี'
    ]
  },
  'Glass Perchlet': {
    classification: 'Genus: Ambassis (Family: Ambassidae)',
    type: 'ปลาน้ำกร่อย',
    info: [
      'ชื่อสามัญ: Glass Perchlet',
      'ชื่อวิทยาศาสตร์: Ambassis spp.',
      'ถิ่นกำเนิด: อินโด-แปซิฟิกตะวันตก',
      'พฤติกรรม: ตัวใสเห็นอวัยวะภายใน, อยู่เป็นฝูง',
      'อายุขัย: 3-5 ปี'
    ]
  },
  'Goby': {
    classification: 'Family: Gobiidae (Order: Gobiiformes)',
    type: 'ปลาน้ำจืด/น้ำกร่อย/ทะเล',
    info: [
      'ชื่อสามัญ: Goby (ปลากบ/ปลาบู่)',
      'ชื่อวิทยาศาสตร์: หลากหลายสกุลในวงศ์ Gobiidae',
      'ถิ่นกำเนิด: พบทั่วโลกในเขตร้อน-อบอุ่น ทั้งน้ำจืด น้ำกร่อย และทะเล',
      'พฤติกรรม: ส่วนใหญ่อาศัยอยู่ตามพื้นท้องน้ำ บางชนิดอยู่ร่วมกับกุ้งหรือปะการัง',
      'อายุขัย: 1-10 ปี (ขึ้นอยู่กับสายพันธุ์)'
    ]
  },
  'Gold Fish': {
    classification: 'Carassius auratus (Family: Cyprinidae, Order: Cypriniformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Goldfish (ปลาทอง)',
      'ชื่อวิทยาศาสตร์: Carassius auratus',
      'ถิ่นกำเนิด: จีนตะวันออก เกาหลี และญี่ปุ่น',
      'พฤติกรรม: ปลาสวยงาม/ปลาเศรษฐกิจ กินพืชและสัตว์น้ำขนาดเล็ก',
      'อายุขัย: 10-30 ปี (ในสภาพเลี้ยงดี)'
    ]
  },
  'Gourami': {
    classification: 'Subfamily: Osphroneminae (Family: Osphronemidae, Order: Anabantiformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Gourami (ปลากระดี่/ปลากัดป่า)',
      'ชื่อวิทยาศาสตร์: หลากหลายสกุล เช่น Trichopodus, Osphronemus',
      'ถิ่นกำเนิด: เอเชียตะวันออกเฉียงใต้และเอเชียใต้',
      'พฤติกรรม: มีอวัยวะช่วยหายใจ (Labyrinth organ) อยู่ได้ในน้ำออกซิเจนต่ำ',
      'อายุขัย: 4-8 ปี (ขึ้นอยู่กับสายพันธุ์)'
    ]
  },
  'Grass Carp': {
    classification: 'Ctenopharyngodon idella (Family: Cyprinidae, Order: Cypriniformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Grass Carp (ปลาไนหญ้า/ปลาเฉา)',
      'ชื่อวิทยาศาสตร์: Ctenopharyngodon idella',
      'ถิ่นกำเนิด: เอเชียตะวันออก (จีน รัสเซียตอนใต้ เวียดนาม)',
      'พฤติกรรม: กินพืชน้ำเป็นหลัก นิยมใช้ควบคุมวัชพืชน้ำ',
      'อายุขัย: 10-20 ปี'
    ]
  },
  'Green Spotted Puffer': {
    classification: 'Dichotomyctere nigroviridis (Family: Tetraodontidae, Order: Tetraodontiformes)',
    type: 'ปลาน้ำกร่อย/ทะเล',
    info: [
      'ชื่อสามัญ: Green Spotted Puffer (ปลาปักเป้าจุดเขียว)',
      'ชื่อวิทยาศาสตร์: Dichotomyctere nigroviridis',
      'ถิ่นกำเนิด: เอเชียใต้และเอเชียตะวันออกเฉียงใต้ ในแหล่งน้ำกร่อยและชายฝั่ง',
      'พฤติกรรม: กินหอยและสัตว์มีกระดอง ต้องเลี้ยงในน้ำกร่อยเมื่อโต',
      'อายุขัย: 8-10 ปี (ในสภาพเลี้ยงที่เหมาะสม)'
    ]
  },
  'Horse Mackerel': {
    classification: 'Genus: Trachurus (Family: Carangidae, Order: Carangiformes)',
    type: 'ปลาทะเล',
    info: [
      'ชื่อสามัญ: Horse Mackerel (ปลาอาจิ/ปลาโคอะจิ)',
      'ชื่อวิทยาศาสตร์: หลากหลายชนิด เช่น Trachurus trachurus',
      'ถิ่นกำเนิด: มหาสมุทรแอตแลนติก เมดิเตอร์เรเนียน และอินโด-แปซิฟิก',
      'พฤติกรรม: อาศัยเป็นฝูงในน้ำลึกชายฝั่ง กินปลาเล็กและครัสเตเชียน',
      'อายุขัย: 15-25 ปี (ประมาณการ)'
    ]
  },
  'Indian Carp': {
    classification: 'Labeo catla (Family: Cyprinidae, Order: Cypriniformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Indian Carp, Catla (ปลาแคทลา)',
      'ชื่อวิทยาศาสตร์: Labeo catla',
      'ถิ่นกำเนิด: อินเดีย บังกลาเทศ พม่า เนปาล',
      'พฤติกรรม: ปลาเศรษฐกิจสำคัญ กินแพลงก์ตอนและสัตว์น้ำขนาดเล็ก',
      'อายุขัย: 10-15 ปี'
    ]
  },
  'Indo-Pacific Tarpon': {
    classification: 'Megalops cyprinoides (Family: Megalopidae, Order: Elopiformes)',
    type: 'ปลาทะเล/น้ำกร่อย/น้ำจืด',
    info: [
      'ชื่อสามัญ: Indo-Pacific Tarpon (ปลาตาหวาน/ปลาตะพัดทะเล)',
      'ชื่อวิทยาศาสตร์: Megalops cyprinoides',
      'ถิ่นกำเนิด: อินโด-แปซิฟิก ตั้งแต่ทะเลแดงถึงแอฟริกา อินเดีย และออสเตรเลีย',
      'พฤติกรรม: มีกระเพาะอากาศช่วยหายใจ ทนน้ำออกซิเจนต่ำได้',
      'อายุขัย: 20-30 ปี (ประมาณการ)'
    ]
  },
  'Jaguar Guapote': {
    classification: 'Parachromis managuensis (Family: Cichlidae, Order: Cichliformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Jaguar Guapote (ปลาหมอจากัวร์/ปลาหมอมาร์เซลลา)',
      'ชื่อวิทยาศาสตร์: Parachromis managuensis',
      'ถิ่นกำเนิด: อเมริกากลาง (ฮอนดูรัสถึงคอสตาริกา)',
      'พฤติกรรม: ปลาเนื้อใหญ่ ก้าวร้าว กินปลาเล็กและสัตว์น้ำ',
      'อายุขัย: 10-15 ปี (ในตู้เลี้ยง)'
    ]
  },
  'Janitor Fish': {
    classification: 'Genus: Pterygoplichthys (Family: Loricariidae, Order: Siluriformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Janitor Fish, Sailfin Catfish (ปลาซักผ้า/ปลาเทศบาล)',
      'ชื่อวิทยาศาสตร์: Pterygoplichthys spp. (เช่น P. pardalis, P. disjunctivus)',
      'ถิ่นกำเนิด: อเมริกาใต้ (ลุ่มน้ำอเมซอนและโอริโนโค)',
      'พฤติกรรม: กินตะไคร่และอินทรียสาร บางชนิดเป็นชนิดพันธุ์ต่างถิ่นรุกราน',
      'อายุขัย: 10-20 ปี'
    ]
  },
  'Knifefish': {
    classification: 'Apteronotus albifrons (Family: Apteronotidae, Order: Gymnotiformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Knifefish, Glass Knifefish',
      'ชื่อวิทยาศาสตร์: Apteronotus albifrons',
      'ถิ่นกำเนิด: อเมริกาใต้ (ลุ่มน้ำอเมซอนและโอริโนโค)',
      'พฤติกรรม: ออกหากินกลางคืน ผลิตกระแสไฟฟ้าอ่อนๆ เพื่อตรวจจับเหยื่อและสื่อสาร',
      'อายุขัย: 8-10 ปี (ในตู้เลี้ยง)'
    ]
  },
  'LongSnoutedPipefish': {
    classification: 'Family: Syngnathidae (Order: Syngnathiformes)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Long-snouted Pipefish',
      'ชื่อวิทยาศาสตร์: หลากหลายสกุลในวงศ์ Syngnathidae',
      'ถิ่นกำเนิด: ทะเลชายฝั่งเขตร้อน-อบอุ่นทั่วโลก',
      'พฤติกรรม: ตัวผู้ตั้งครรภ์และฟักไข่ในถุงหน้าท้อง กินแพลงก์ตอนและกุ้งตัวเล็ก',
      'อายุขัย: 1-2 ปี'
    ]
  },
  'MosquitoFish': {
    classification: 'Gambusia affinis (Family: Poeciliidae, Order: Cyprinodontiformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Mosquitofish, Gambusia',
      'ชื่อวิทยาศาสตร์: Gambusia affinis',
      'ถิ่นกำเนิด: อเมริกาเหนือและอเมริกากลาง',
      'พฤติกรรม: กินลูกยุงและไข่แมลง คลื่นลูกอ่อน มักถูกปล่อยเพื่อควบคุมยุงแต่เป็นชนิดพันธุ์รุกราน',
      'อายุขัย: 1-2 ปี'
    ]
  },
  'Mudfish': {
    classification: 'Geostomum undulatum (Family: Eleotridae, Order: Gobiiformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Mudfish, Giant Mudfish',
      'ชื่อวิทยาศาสตร์: Geostomum undulatum',
      'ถิ่นกำเนิด: ออสเตรเลียตะวันออกเฉียงใต้ (แม่น้ำและบึงน้ำจืด)',
      'พฤติกรรม: ทนน้ำขังและออกซิเจนต่ำได้ กินเนื้อและพืชน้ำ วางไข่บนรากไม้หรือพงพืช',
      'อายุขัย: 8-12 ปี'
    ]
  },
  'Mullet': {
    classification: 'Family: Mugilidae (Order: Mugiliformes)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Mullet, Grey Mullet',
      'ชื่อวิทยาศาสตร์: หลากหลายชนิด เช่น Mugil cephalus',
      'ถิ่นกำเนิด: พบทั่วโลกในเขตร้อน-อบอุ่น ชายฝั่งและปากแม่น้ำ',
      'พฤติกรรม: ใช้ปากขูดกินอินทรียสารและตะไคร่จากพื้นโคลน เป็นปลาเศรษฐกิจสำคัญ',
      'อายุขัย: 5-10 ปี'
    ]
  },
  'Pangasius': {
    classification: 'Pangasius hypophthalmus (Family: Pangasiidae, Order: Siluriformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Pangasius, Swai, Basa',
      'ชื่อวิทยาศาสตร์: Pangasius hypophthalmus',
      'ถิ่นกำเนิด: ลุ่มแม่น้ำโขงและเอเชียตะวันออกเฉียงใต้',
      'พฤติกรรม: กินทุกอย่างและแพลงก์ตอน โตเร็ว นิยมเลี้ยงเชิงพาณิชย์และส่งออกระดับโลก',
      'อายุขัย: 15-20 ปี'
    ]
  },
  'Perch': {
    classification: 'Perca fluviatilis (Family: Percidae, Order: Perciformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Perch, European Perch',
      'ชื่อวิทยาศาสตร์: Perca fluviatilis',
      'ถิ่นกำเนิด: ยุโรปและเอเชียเหนือ ทะเลสาบและแม่น้ำน้ำใส',
      'พฤติกรรม: ล่าปลาเล็กและกุ้ง อาศัยในบริเวณที่มีพืชน้ำ นิยมตกปลาและบริโภค',
      'อายุขัย: 10-15 ปี'
    ]
  },
  'RedMullet': {
    classification: 'Mullus surmuletus (Family: Mullidae, Order: Mugiliformes)',
    type: 'ปลาทะเล',
    info: [
      'ชื่อสามัญ: Red Mullet',
      'ชื่อวิทยาศาสตร์: Mullus surmuletus',
      'ถิ่นกำเนิด: ทะเลเมดิเตอร์เรเนียนและแอตแลนติกตะวันออก',
      'พฤติกรรม: ใช้หนวดที่ริมปากค้นหาหอยและครัสเตเชียนในพื้นทราย เนื้อรสชาติดีราคาสูง',
      'อายุขัย: 8-10 ปี'
    ]
  },
  'RedSeaBream': {
    classification: 'Pagrus major (Family: Sparidae, Order: Spariformes)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Red Sea Bream, Madai',
      'ชื่อวิทยาศาสตร์: Pagrus major',
      'ถิ่นกำเนิด: อินโด-แปซิฟิกตะวันตก ญี่ปุ่นและเอเชียตะวันออกเฉียงใต้',
      'พฤติกรรม: อาศัยแนวปะการังและหิน กินหอย กุ้ง และปลาเล็ก ปลาเศรษฐกิจสำคัญ',
      'อายุขัย: 15-20 ปี'
    ]
  },
  'ScatFish': {
    classification: 'Scatophagus argus (Family: Scatophagidae, Order: Perciformes)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Scatfish, Goldband Scat',
      'ชื่อวิทยาศาสตร์: Scatophagus argus',
      'ถิ่นกำเนิด: อินโด-แปซิฟิกตะวันตก ชายฝั่งและแหล่งน้ำกร่อย',
      'พฤติกรรม: กินพืชน้ำ สาหร่าย และเศษอาหาร ทนน้ำคุณภาพต่ำ มักใช้ทำความสะอาดตู้',
      'อายุขัย: 8-10 ปี'
    ]
  },
  'SeaBass': {
    classification: 'Dicentrarchus labrax (Family: Moronidae)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Sea Bass, European Bass',
      'ชื่อวิทยาศาสตร์: Dicentrarchus labrax',
      'ถิ่นกำเนิด: ทะเลเมดิเตอร์เรเนียนและแอตแลนติกตะวันออก',
      'พฤติกรรม: ล่าปลาเล็กและครัสเตเชียนใกล้พื้นดิน นิยมเลี้ยงเชิงพาณิชย์',
      'อายุขัย: 12-18 ปี'
    ]
  },
  'Shrimp': {
    classification: 'Family: Caridea / Palaemonidae (Order: Decapoda)',
    type: 'สัตว์น้ำเปลือกแข็ง/น้ำจืด-ทะเล',
    info: [
      'ชื่อสามัญ: Shrimp (กุ้ง)',
      'ชื่อวิทยาศาสตร์: หลากหลายสกุล เช่น Penaeus, Macrobrachium',
      'ถิ่นกำเนิด: พบทั่วโลกทั้งน้ำจืด น้ำกร่อย และทะเล',
      'พฤติกรรม: กินเศษอินทรียสาร แพลงก์ตอน และพืชบางชนิด',
      'อายุขัย: 1-3 ปี (ขึ้นอยู่กับสายพันธุ์)'
    ]
  },
  'SilverBarb': {
    classification: 'Barbodes gonionotus (Family: Cyprinidae, Order: Cypriniformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Silver Barb, Golden Barb',
      'ชื่อวิทยาศาสตร์: Barbodes gonionotus',
      'ถิ่นกำเนิด: เอเชียตะวันออกเฉียงใต้และอินเดีย',
      'พฤติกรรม: กินแพลงก์ตอนและพืชเล็กๆ มักพบเป็นฝูงในแม่น้ำและบึง',
      'อายุขัย: 5-8 ปี'
    ]
  },
  'SilverCarp': {
    classification: 'Hypophthalmichthys molitrix (Family: Cyprinidae, Order: Cypriniformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Silver Carp, White Amur Carp',
      'ชื่อวิทยาศาสตร์: Hypophthalmichthys molitrix',
      'ถิ่นกำเนิด: เอเชียตะวันออก (จีน)',
      'พฤติกรรม: กินแพลงก์ตอนสัตว์เป็นหลัก มักกระโดด出水面เมื่อตกใจ',
      'อายุขัย: 10-20 ปี'
    ]
  },
  'SilverPerch': {
    classification: 'Bidyanus bidyanus (Family: Terapontidae, Order: Acanthuriformes)',
    type: 'ปลาน้ำจืด/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Silver Perch, Australian Silver Perch',
      'ชื่อวิทยาศาสตร์: Bidyanus bidyanus',
      'ถิ่นกำเนิด: ออสเตรเลีย (ลุ่มแม่น้ำและปากแม่น้ำ)',
      'พฤติกรรม: อาศัยเป็นฝูงใกล้พื้นน้ำ กินสัตว์น้ำขนาดเล็กและหอย',
      'อายุขัย: 15-20 ปี'
    ]
  },
  'Snakehead': {
    classification: 'Channa spp. (Family: Channidae, Order: Anabantiformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Snakehead (ปลาช่อน)',
      'ชื่อวิทยาศาสตร์: Channa spp. (เช่น C. argus, C. striata)',
      'ถิ่นกำเนิด: เอเชียใต้และเอเชียตะวันออกเฉียงใต้',
      'พฤติกรรม: มีอวัยวะช่วยหายใจ กินเนื้อ ก้าวร้าวและปรับตัวได้ดี',
      'อายุขัย: 10-15 ปี'
    ]
  },
  'StripedRedMullet': {
    classification: 'Mullus surmuletus (Family: Mullidae, Order: Mugiliformes)',
    type: 'ปลาทะเล',
    info: [
      'ชื่อสามัญ: Striped Red Mullet, Red Mullet',
      'ชื่อวิทยาศาสตร์: Mullus surmuletus',
      'ถิ่นกำเนิด: ทะเลเมดิเตอร์เรเนียนและแอตแลนติกตะวันออก',
      'พฤติกรรม: ใช้หนวดที่ปากขุดหาหอยและหนอนในพื้นทราย เนื้อรสชาติดี',
      'อายุขัย: 8-12 ปี'
    ]
  },
  'Tenpounder': {
    classification: 'Equetus lanceolatus (Family: Centropomidae, Order: Perciformes)',
    type: 'ปลาทะเล/น้ำกร่อย',
    info: [
      'ชื่อสามัญ: Tenpounder, Blue Snook',
      'ชื่อวิทยาศาสตร์: Equetus lanceolatus',
      'ถิ่นกำเนิด: อเมริกากลางและอเมริกาเหนือฝั่งแปซิฟิก',
      'พฤติกรรม: ล่าปลาเล็กและกุ้งในป่าชายเลนและปากแม่น้ำ',
      'อายุขัย: 10-15 ปี'
    ]
  },
  'Tilapia': {
    classification: 'Oreochromis niloticus (Family: Cichlidae, Order: Cichliformes)',
    type: 'ปลาน้ำจืด',
    info: [
      'ชื่อสามัญ: Tilapia, Nile Tilapia',
      'ชื่อวิทยาศาสตร์: Oreochromis niloticus',
      'ถิ่นกำเนิด: อフリกาตะวันออกและตะวันออกกลาง',
      'พฤติกรรม: กินพืชและอินทรียสาร เป็นปลาเศรษฐกิจที่เลี้ยงง่ายและโตเร็ว',
      'อายุขัย: 5-10 ปี (ในธรรมชาติ/เลี้ยง)'
    ]
  },
  'Trout': {
    classification: 'Oncorhynchus mykiss (Family: Salmonidae, Order: Salmoniformes)',
    type: 'ปลาน้ำจืด/น้ำเย็น',
    info: [
      'ชื่อสามัญ: Trout, Rainbow Trout',
      'ชื่อวิทยาศาสตร์: Oncorhynchus mykiss',
      'ถิ่นกำเนิด: แควนติกอเมริกาเหนือ (ปัจจุบันพบทั่วโลก)',
      'พฤติกรรม: กินปลาเล็ก กุ้ง และแมลง ต้องการน้ำเย็นและออกซิเจนสูง',
      'อายุขัย: 4-8 ปี (ในธรรมชาติ)'
    ]
  }
};

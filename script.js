// =================== WORD LIST ===================
// ตัวอย่าง 500 คำภาษาอังกฤษ + แปลไทย (แปลคร่าว ๆ)
const wordList = [
  { word: "abandon", meaning: "ละทิ้ง" },
  { word: "ability", meaning: "ความสามารถ" },
  { word: "able", meaning: "สามารถ" },
  { word: "about", meaning: "เกี่ยวกับ" },
  { word: "above", meaning: "เหนือ" },
  { word: "accept", meaning: "ยอมรับ" },
  { word: "account", meaning: "บัญชี" },
  { word: "across", meaning: "ข้าม" },
  { word: "act", meaning: "ทำ / การกระทำ" },
  { word: "action", meaning: "การกระทำ" },
  { word: "activity", meaning: "กิจกรรม" },
  { word: "actually", meaning: "จริง ๆ" },
  { word: "add", meaning: "เพิ่ม" },
  { word: "address", meaning: "ที่อยู่ / กล่าวถึง" },
  { word: "administration", meaning: "การบริหาร" },
  { word: "admit", meaning: "ยอมรับ" },
  { word: "adult", meaning: "ผู้ใหญ่" },
  { word: "affect", meaning: "มีผลต่อ" },
  { word: "after", meaning: "หลังจาก" },
  { word: "again", meaning: "อีกครั้ง" },
  { word: "against", meaning: "ต่อต้าน / กับ" },
  { word: "age", meaning: "อายุ" },
  { word: "agency", meaning: "หน่วยงาน" },
  { word: "agent", meaning: "ตัวแทน" },
  { word: "ago", meaning: "ที่ผ่านมา" },
  { word: "agree", meaning: "ตกลง" },
  { word: "agreement", meaning: "ข้อตกลง" },
  { word: "ahead", meaning: "ข้างหน้า" },
  { word: "air", meaning: "อากาศ" },
  { word: "all", meaning: "ทั้งหมด" },
  { word: "allow", meaning: "อนุญาต" },
  { word: "almost", meaning: "เกือบ" },
  { word: "alone", meaning: "คนเดียว" },
  { word: "along", meaning: "ตาม" },
  { word: "already", meaning: "แล้ว" },
  { word: "also", meaning: "ด้วย / นอกจากนี้" },
  { word: "although", meaning: "แม้ว่า" },
  { word: "always", meaning: "เสมอ" },
  { word: "American", meaning: "ชาวอเมริกัน" },
  { word: "among", meaning: "ในหมู่" },
  { word: "amount", meaning: "จำนวน" },
  { word: "analysis", meaning: "การวิเคราะห์" },
  { word: "and", meaning: "และ" },
  { word: "animal", meaning: "สัตว์" },
  { word: "another", meaning: "อีกอัน / อีกคน" },
  { word: "answer", meaning: "ตอบ / คำตอบ" },
  { word: "any", meaning: "ใด ๆ" },
  { word: "anyone", meaning: "ใครก็ได้" },
  { word: "anything", meaning: "อะไรก็ได้" },
  { word: "appear", meaning: "ปรากฏ" },
  { word: "apply", meaning: "สมัคร / ใช้" },
  { word: "approach", meaning: "วิธีการ / เข้าหา" },
  { word: "area", meaning: "พื้นที่" },
  { word: "argue", meaning: "โต้เถียง" },
  { word: "arm", meaning: "แขน" },
  { word: "around", meaning: "รอบ ๆ" },
  { word: "arrive", meaning: "มาถึง" },
  { word: "art", meaning: "ศิลปะ" },
  { word: "article", meaning: "บทความ" },
  { word: "artist", meaning: "ศิลปิน" },
  { word: "ask", meaning: "ถาม / ขอ" },
  { word: "assume", meaning: "สมมติ" },
  { word: "at", meaning: "ที่" },
  { word: "attack", meaning: "โจมตี" },
  { word: "attention", meaning: "ความสนใจ" },
  { word: "attorney", meaning: "ทนาย" },
  { word: "audience", meaning: "ผู้ฟัง / ผู้ชม" },
  { word: "author", meaning: "ผู้แต่ง" },
  { word: "authority", meaning: "อำนาจ" },
  { word: "available", meaning: "ใช้ได้" },
  { word: "avoid", meaning: "หลีกเลี่ยง" },
  { word: "away", meaning: "ไป / ห่าง" },
  { word: "baby", meaning: "ทารก" },
  { word: "back", meaning: "กลับ / หลัง" },
  { word: "bad", meaning: "แย่" },
  { word: "bag", meaning: "กระเป๋า" },
  { word: "ball", meaning: "ลูกบอล" },
  { word: "bank", meaning: "ธนาคาร" },
  { word: "bar", meaning: "แถบ / ร้าน" },
  { word: "base", meaning: "ฐาน" },
  { word: "be", meaning: "เป็น / อยู่" },
  { word: "beat", meaning: "เอาชนะ / ตี" },
  { word: "beautiful", meaning: "สวย" },
  { word: "because", meaning: "เพราะว่า" },
  { word: "become", meaning: "กลายเป็น" },
  { word: "bed", meaning: "เตียง" },
  { word: "before", meaning: "ก่อน" },
  { word: "begin", meaning: "เริ่ม" },
  { word: "behavior", meaning: "พฤติกรรม" },
  { word: "behind", meaning: "อยู่ข้างหลัง" },
  { word: "believe", meaning: "เชื่อ" },
  { word: "benefit", meaning: "ประโยชน์" },
  { word: "best", meaning: "ดีที่สุด" },
  { word: "better", meaning: "ดีกว่า" },
  { word: "between", meaning: "ระหว่าง" },
  { word: "beyond", meaning: "เกิน" },
  { word: "big", meaning: "ใหญ่" },
  { word: "bill", meaning: "บิล / ใบเรียกเก็บเงิน" },
  { word: "billion", meaning: "พันล้าน" },
  { word: "bit", meaning: "เล็กน้อย" },
  { word: "black", meaning: "สีดำ" },
  { word: "blood", meaning: "เลือด" },
  { word: "blue", meaning: "สีน้ำเงิน" },
  { word: "board", meaning: "กระดาน / คณะกรรมการ" },
  { word: "body", meaning: "ร่างกาย" },
  { word: "book", meaning: "หนังสือ" },
  { word: "born", meaning: "เกิด" },
  { word: "both", meaning: "ทั้งสอง" },
  { word: "box", meaning: "กล่อง" },
  { word: "boy", meaning: "เด็กชาย" },
  { word: "break", meaning: "แตก / พัก" },
  { word: "bring", meaning: "นำมา" },
  { word: "brother", meaning: "พี่ชาย / น้องชาย" },
  { word: "budget", meaning: "งบประมาณ" },
  { word: "build", meaning: "สร้าง" },
  { word: "building", meaning: "อาคาร" },
  { word: "business", meaning: "ธุรกิจ" },
  { word: "but", meaning: "แต่" },
  { word: "buy", meaning: "ซื้อ" },
  { word: "by", meaning: "โดย" },
  { word: "call", meaning: "เรียก / โทร" },
  { word: "camera", meaning: "กล้อง" },
  { word: "campaign", meaning: "แคมเปญ" },
  { word: "can", meaning: "สามารถ" },
  { word: "cancer", meaning: "มะเร็ง" },
  { word: "candidate", meaning: "ผู้สมัคร" },
  { word: "capital", meaning: "เมืองหลวง / เงินทุน" },
  { word: "car", meaning: "รถยนต์" },
  { word: "card", meaning: "บัตร" },
  { word: "care", meaning: "ดูแล" },
  { word: "career", meaning: "อาชีพ" },
  { word: "carry", meaning: "พก / ถือ" },
  { word: "case", meaning: "กรณี" },
  { word: "catch", meaning: "จับ" },
  { word: "cause", meaning: "สาเหตุ" },
  { word: "cell", meaning: "เซลล์" },
  { word: "center", meaning: "ศูนย์" },
  { word: "central", meaning: "กลาง" },
  { word: "century", meaning: "ศตวรรษ" },
  { word: "certain", meaning: "แน่นอน" },
  { word: "certainly", meaning: "แน่นอน / อย่างชัดเจน" },
  { word: "chair", meaning: "เก้าอี้" },
  { word: "challenge", meaning: "ความท้าทาย" },
  { word: "chance", meaning: "โอกาส" },
  { word: "change", meaning: "เปลี่ยน" },
  { word: "character", meaning: "ตัวละคร / บุคลิก" },
  { word: "charge", meaning: "เรียกเก็บ / ชาร์จ" },
  { word: "check", meaning: "ตรวจสอบ" },
  { word: "child", meaning: "เด็ก" },
  { word: "choice", meaning: "ทางเลือก" },
  { word: "choose", meaning: "เลือก" },
  { word: "church", meaning: "โบสถ์" },
  { word: "citizen", meaning: "พลเมือง" },
  { word: "city", meaning: "เมือง" },
  { word: "civil", meaning: "พลเมือง / สังคม" },
  { word: "claim", meaning: "อ้าง" },
  { word: "class", meaning: "ชั้นเรียน / ชั้น" },
  { word: "clear", meaning: "ชัดเจน" },
  { word: "clearly", meaning: "อย่างชัดเจน" },
  { word: "close", meaning: "ปิด / ใกล้" },
  { word: "coach", meaning: "โค้ช" },
  { word: "cold", meaning: "หนาว" },
  { word: "collection", meaning: "การเก็บ / คอลเลคชัน" },
  { word: "college", meaning: "วิทยาลัย" },
  { word: "color", meaning: "สี" },
  { word: "come", meaning: "มา" },
  { word: "commercial", meaning: "เชิงพาณิชย์" },
  { word: "common", meaning: "ทั่วไป" },
  { word: "community", meaning: "ชุมชน" },
  { word: "company", meaning: "บริษัท" },
  { word: "compare", meaning: "เปรียบเทียบ" },
  { word: "computer", meaning: "คอมพิวเตอร์" },
  { word: "concern", meaning: "ความกังวล" },
  { word: "condition", meaning: "เงื่อนไข / สภาพ" },
  { word: "conference", meaning: "การประชุม" },
  { word: "consider", meaning: "พิจารณา" },
  { word: "consumer", meaning: "ผู้บริโภค" },
  { word: "contain", meaning: "บรรจุ" },
  { word: "continue", meaning: "ต่อเนื่อง" },
  { word: "control", meaning: "ควบคุม" },
  { word: "cost", meaning: "ค่าใช้จ่าย" },
  { word: "could", meaning: "สามารถ" },
  { word: "country", meaning: "ประเทศ" },
  { word: "couple", meaning: "คู่" },
  { word: "course", meaning: "หลักสูตร / แนวทาง" },
  { word: "court", meaning: "ศาล" },
  { word: "cover", meaning: "คลุม / ครอบคลุม" },
  { word: "create", meaning: "สร้าง" },
  { word: "crime", meaning: "อาชญากรรม" },
  { word: "cultural", meaning: "ทางวัฒนธรรม" },
  { word: "culture", meaning: "วัฒนธรรม" },
  { word: "cup", meaning: "ถ้วย" },
  { word: "current", meaning: "ปัจจุบัน" },
  { word: "customer", meaning: "ลูกค้า" },
  { word: "cut", meaning: "ตัด" },
  { word: "dark", meaning: "มืด / มืดมน" },
  { word: "data", meaning: "ข้อมูล" },
  { word: "daughter", meaning: "ลูกสาว" },
  { word: "day", meaning: "วัน" },
  { word: "dead", meaning: "ตาย" },
  { word: "deal", meaning: "จัดการ / ข้อตกลง" },
  { word: "death", meaning: "ความตาย" },
  { word: "debate", meaning: "โต้วาที" },
  { word: "decade", meaning: "ทศวรรษ" },
  { word: "decide", meaning: "ตัดสินใจ" },
  { word: "decision", meaning: "การตัดสินใจ" },
  { word: "deep", meaning: "ลึก" },
  { word: "defense", meaning: "การป้องกัน" },
  { word: "degree", meaning: "ระดับ" },
  { word: "democrat", meaning: "นักประชาธิปไตย" },
  { word: "describe", meaning: "อธิบาย" },
  { word: "design", meaning: "ออกแบบ" },
  { word: "despite", meaning: "แม้ว่า" },
  { word: "detail", meaning: "รายละเอียด" },
  { word: "determine", meaning: "กำหนด" },
  { word: "develop", meaning: "พัฒนา" },
  { word: "development", meaning: "การพัฒนา" },
  { word: "die", meaning: "ตาย" },
  { word: "difference", meaning: "ความแตกต่าง" },
  { word: "different", meaning: "แตกต่าง" },
  { word: "difficult", meaning: "ยาก" },
  { word: "dinner", meaning: "อาหารเย็น" },
  { word: "direction", meaning: "ทิศทาง" },
  { word: "director", meaning: "ผู้อำนวยการ" },
  { word: "discover", meaning: "ค้นพบ" },
  { word: "discussion", meaning: "การอภิปราย" },
  { word: "disease", meaning: "โรค" },
  { word: "do", meaning: "ทำ" },
  { word: "doctor", meaning: "หมอ" },
  { word: "dog", meaning: "สุนัข" },
  { word: "door", meaning: "ประตู" },
  { word: "down", meaning: "ลง / ข้างล่าง" },
  { word: "draw", meaning: "วาด" },
  { word: "dream", meaning: "ฝัน" },
  { word: "drive", meaning: "ขับรถ" },
  { word: "drop", meaning: "ลด / หล่น" },
  { word: "drug", meaning: "ยา" },
  { word: "during", meaning: "ระหว่าง" },
  { word: "each", meaning: "แต่ละ" },
  { word: "early", meaning: "แต่เนิ่น ๆ" },
  { word: "east", meaning: "ทิศตะวันออก" },
  { word: "easy", meaning: "ง่าย" },
  { word: "eat", meaning: "กิน" },
  { word: "economic", meaning: "ทางเศรษฐกิจ" },
  { word: "economy", meaning: "เศรษฐกิจ" },
  { word: "edge", meaning: "ขอบ" },
  { word: "education", meaning: "การศึกษา" },
  { word: "effect", meaning: "ผล" },
  { word: "effort", meaning: "ความพยายาม" },
  { word: "eight", meaning: "แปด" },
  { word: "either", meaning: "อย่างใดอย่างหนึ่ง" },
  { word: "election", meaning: "การเลือกตั้ง" },
  { word: "else", meaning: "อื่น" },
  { word: "employee", meaning: "พนักงาน" },
  { word: "end", meaning: "จบ" },
  { word: "energy", meaning: "พลังงาน" },
  { word: "enjoy", meaning: "เพลิดเพลิน" },
  { word: "enough", meaning: "เพียงพอ" },
  { word: "enter", meaning: "เข้า" },
  { word: "entire", meaning: "ทั้งหมด" },
  { word: "environment", meaning: "สภาพแวดล้อม" },
  { word: "especially", meaning: "โดยเฉพาะ" },
  { word: "establish", meaning: "ก่อตั้ง" },
  { word: "even", meaning: "แม้ว่า / ถึงแม้" },
  { word: "evening", meaning: "ตอนเย็น" },
  { word: "event", meaning: "เหตุการณ์" },
  { word: "ever", meaning: "ตลอดเวลา" },
  { word: "every", meaning: "ทุก" },
  { word: "everybody", meaning: "ทุกคน" },
  { word: "everyone", meaning: "ทุกคน" },
  { word: "everything", meaning: "ทุกสิ่ง" },
  { word: "evidence", meaning: "หลักฐาน" },
  { word: "exactly", meaning: "อย่างแม่นยำ" },
  { word: "example", meaning: "ตัวอย่าง" },
  { word: "except", meaning: "ยกเว้น" },
  { word: "exchange", meaning: "แลกเปลี่ยน" },
  { word: "excuse", meaning: "ข้อแก้ตัว" },
  { word: "exercise", meaning: "การออกกำลังกาย" },
  { word: "exist", meaning: "มีอยู่" },
  { word: "expect", meaning: "คาดหวัง" },
  { word: "experience", meaning: "ประสบการณ์" },
  { word: "expert", meaning: "ผู้เชี่ยวชาญ" },
  { word: "explain", meaning: "อธิบาย" },
  { word: "eye", meaning: "ตา" },
  { word: "face", meaning: "หน้า / เผชิญ" },
  { word: "fact", meaning: "ข้อเท็จจริง" },
  { word: "factor", meaning: "ปัจจัย" },
  { word: "fail", meaning: "ล้มเหลว" },
  { word: "fall", meaning: "ตก" },
  { word: "family", meaning: "ครอบครัว" },
  { word: "far", meaning: "ไกล" },
  { word: "fast", meaning: "เร็ว" },
  { word: "father", meaning: "พ่อ" },
  { word: "fear", meaning: "ความกลัว" },
  { word: "federal", meaning: "สหพันธ์" },
  { word: "feel", meaning: "รู้สึก" },
  { word: "feeling", meaning: "ความรู้สึก" },
  { word: "few", meaning: "ไม่กี่" },
  { word: "field", meaning: "สนาม / สาขา" },
  { word: "fight", meaning: "สู้" },
  { word: "figure", meaning: "รูป / ตัวเลข" },
  { word: "fill", meaning: "เติม" },
  { word: "film", meaning: "ภาพยนตร์" },
  { word: "final", meaning: "สุดท้าย" },
  { word: "finally", meaning: "สุดท้าย / ในที่สุด" },
  { word: "financial", meaning: "ทางการเงิน" },
  { word: "find", meaning: "หา" },
  { word: "fine", meaning: "ดี / ดีงาม" },
  { word: "finger", meaning: "นิ้วมือ" },
  { word: "finish", meaning: "เสร็จ" },
  { word: "fire", meaning: "ไฟ" },
  { word: "firm", meaning: "มั่นคง / บริษัท" },
  { word: "first", meaning: "แรก" },
  { word: "fish", meaning: "ปลา" },
  { word: "five", meaning: "ห้า" },
  { word: "floor", meaning: "พื้น" },
  { word: "fly", meaning: "บิน" },
  { word: "focus", meaning: "โฟกัส" },
  { word: "follow", meaning: "ตาม" },
  { word: "food", meaning: "อาหาร" },
  { word: "foot", meaning: "เท้า" },
  { word: "for", meaning: "สำหรับ" },
  { word: "force", meaning: "กำลัง" },
  { word: "foreign", meaning: "ต่างประเทศ" },
  { word: "forget", meaning: "ลืม" },
  { word: "form", meaning: "แบบฟอร์ม / รูปแบบ" },
  { word: "former", meaning: "อดีต" },
  { word: "forward", meaning: "ไปข้างหน้า" },
  { word: "four", meaning: "สี่" },
  { word: "free", meaning: "ฟรี / อิสระ" },
  { word: "friend", meaning: "เพื่อน" },
  { word: "from", meaning: "จาก" },
  { word: "front", meaning: "ด้านหน้า" },
  { word: "full", meaning: "เต็ม" },
  { word: "fund", meaning: "กองทุน" },
  { word: "future", meaning: "อนาคต" },
  { word: "gain", meaning: "ได้มา / ได้รับ" },
  { word: "general", meaning: "ทั่วไป / ทั่วไป" },
  { word: "generation", meaning: "รุ่น / การผลิต" },
  { word: "get", meaning: "ได้รับ / เอา" },
  { word: "girl", meaning: "เด็กหญิง" },
  { word: "give", meaning: "ให้" },
  { word: "glass", meaning: "แก้ว" },
  { word: "go", meaning: "ไป" },
  { word: "goal", meaning: "เป้าหมาย" },
  { word: "good", meaning: "ดี" },
  { word: "government", meaning: "รัฐบาล" },
  { word: "great", meaning: "ยอดเยี่ยม" },
  { word: "green", meaning: "สีเขียว" },
  { word: "ground", meaning: "พื้น / ดิน" },
  { word: "group", meaning: "กลุ่ม" },
  { word: "grow", meaning: "เติบโต / ขยาย" },
  { word: "guess", meaning: "เดา" },
  { word: "guide", meaning: "แนะนำ / ไกด์" },
  { word: "hand", meaning: "มือ" },
  { word: "handle", meaning: "จัดการ / จับ" },
  { word: "hang", meaning: "แขวน" },
  { word: "happen", meaning: "เกิดขึ้น" },
  { word: "happy", meaning: "มีความสุข" },
  { word: "hard", meaning: "ยาก / แข็ง" },
  { word: "have", meaning: "มี" },
  { word: "head", meaning: "หัว" },
  { word: "health", meaning: "สุขภาพ" },
  { word: "hear", meaning: "ได้ยิน" },
  { word: "heart", meaning: "หัวใจ" },
  { word: "heat", meaning: "ความร้อน" },
  { word: "heavy", meaning: "หนัก" },
  { word: "help", meaning: "ช่วย" },
  { word: "her", meaning: "เธอ / ของเธอ" },
  { word: "here", meaning: "ที่นี่" },
  { word: "herself", meaning: "ตัวเธอเอง" },
  { word: "high", meaning: "สูง" },
  { word: "him", meaning: "เขา (ผู้ชาย)" },
  { word: "himself", meaning: "ตัวเขาเอง" },
  { word: "his", meaning: "ของเขา (ผู้ชาย)" },
  { word: "history", meaning: "ประวัติศาสตร์" },
  { word: "hit", meaning: "ตี / โจมตี" },
  { word: "hold", meaning: "ถือ / จับ" },
  { word: "home", meaning: "บ้าน" },
  { word: "hope", meaning: "หวัง" },
  { word: "hospital", meaning: "โรงพยาบาล" },
  { word: "hot", meaning: "ร้อน" },
  { word: "hotel", meaning: "โรงแรม" },
  { word: "hour", meaning: "ชั่วโมง" },
  { word: "house", meaning: "บ้าน" },
  { word: "how", meaning: "อย่างไร" },
  { word: "however", meaning: "อย่างไรก็ตาม" },
  { word: "huge", meaning: "ใหญ่ / มหาศาล" },
  { word: "human", meaning: "มนุษย์" },
  { word: "hundred", meaning: "ร้อย" },
  { word: "husband", meaning: "สามี" },
  { word: "idea", meaning: "ความคิด / แนวคิด" },
  { word: "identify", meaning: "ระบุ / จำแนก" },
  { word: "if", meaning: "ถ้า" },
  { word: "image", meaning: "ภาพ / ภาพลักษณ์" },
  { word: "imagine", meaning: "จินตนาการ" },
  { word: "impact", meaning: "ผลกระทบ" },
  { word: "important", meaning: "สำคัญ" },
  { word: "improve", meaning: "ปรับปรุง / พัฒนา" },
  { word: "include", meaning: "รวมถึง" },
  { word: "including", meaning: "รวมถึง" },
  { word: "increase", meaning: "เพิ่ม" },
  { word: "indeed", meaning: "จริง ๆ" },
  { word: "indicate", meaning: "บ่งชี้" },
  { word: "individual", meaning: "บุคคล" },
  { word: "industry", meaning: "อุตสาหกรรม" },
  { word: "information", meaning: "ข้อมูล" },
  { word: "inside", meaning: "ข้างใน" },
  { word: "instead", meaning: "แทน" },
  { word: "institution", meaning: "สถาบัน" },
  { word: "interest", meaning: "ความสนใจ / ดอกเบี้ย" },
  { word: "interesting", meaning: "น่าสนใจ" },
  { word: "international", meaning: "ระหว่างประเทศ" },
  { word: "interview", meaning: "สัมภาษณ์" },
  { word: "into", meaning: "เข้าไปใน" },
  { word: "investment", meaning: "การลงทุน" },
  { word: "involve", meaning: "เกี่ยวข้อง" },
  { word: "issue", meaning: "ประเด็น / ปัญหา" },
  { word: "item", meaning: "รายการ" },
  { word: "itself", meaning: "ตัวมันเอง" }


];

// =================== GAME STATE ===================
let score = 0;
let matched = 0;
let selected = [];
let timer = null;
let timeRemaining = 0;
let remainingWords = [];
const maxDisplay = 5; // แสดงทีละ 5 คำ

// =================== DOM ===================
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("game-area");
const timeLeftEl = document.getElementById("timeLeft");
const resultBox = document.getElementById("result-box");
const timerSelect = document.getElementById("timerSelect");

startBtn.addEventListener("click", startGame);

function startGame() {
  clearInterval(timer);
  score = 0;
  matched = 0;
  selected = [];
  resultBox.style.display = "none";

  remainingWords = [...wordList];
  shuffleArray(remainingWords);

  timeRemaining = parseInt(timerSelect.value, 10) || 120; // default 2 min
  updateTimeDisplay();

  timer = setInterval(() => {
    timeRemaining--;
    updateTimeDisplay();
    if (timeRemaining <= 0) endGame(false);
  }, 1000);

  showNextWords();
}

function showNextWords() {
  gameArea.innerHTML = "";
  selected = [];
  const slice = remainingWords.splice(0, maxDisplay);
  slice.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = item.word;
    div.dataset.meaning = item.meaning;
    div.addEventListener("click", () => checkWord(div));
    gameArea.appendChild(div);
  });
}

function checkWord(div) {
  if (div.classList.contains("selected")) return;
  div.classList.add("selected");
  selected.push(div);
  if (selected.length === 2) {
    const [a, b] = selected;
    if (a.dataset.meaning === b.textContent || b.dataset.meaning === a.textContent) {
      a.classList.add("matched");
      b.classList.add("matched");
      score += 10;
      matched += 2;
      setTimeout(() => {
        if (remainingWords.length > 0) showNextWords();
        else endGame(true);
      }, 500);
    } else {
      setTimeout(() => {
        a.classList.remove("selected");
        b.classList.remove("selected");
      }, 600);
    }
    selected = [];
  }
}

function endGame(win) {
  clearInterval(timer);
  resultBox.style.display = "block";
  let html = win ? `<h2>🎉 Game Win!</h2>` : `<h2>⏱ Game Over</h2>`;
  html += `<p>Score: ${score}</p>`;
  html += `<p>Time used: ${parseInt(timerSelect.value, 10) - timeRemaining}s</p>`;
  resultBox.innerHTML = html;
}

function updateTimeDisplay() {
  timeLeftEl.textContent = `⏱ Time: ${timeRemaining}s`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

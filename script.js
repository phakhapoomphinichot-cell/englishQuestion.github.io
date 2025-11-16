const wordList = [
  {word: "abandon", meaning: "ละทิ้ง"}, {word: "ability", meaning: "ความสามารถ"}, 
  {word: "able", meaning: "สามารถ"}, {word: "about", meaning: "เกี่ยวกับ"}, 
  {word: "above", meaning: "เหนือ"}, {word: "accept", meaning: "ยอมรับ"}, 
  {word: "according", meaning: "ตาม"}, {word: "account", meaning: "บัญชี"}, 
  {word: "across", meaning: "ข้าม"}, {word: "act", meaning: "กระทำ"}, 
  {word: "action", meaning: "การกระทำ"}, {word: "activity", meaning: "กิจกรรม"}, 
  {word: "actually", meaning: "จริง ๆ"}, {word: "add", meaning: "เพิ่ม"}, 
  {word: "address", meaning: "ที่อยู่"}, {word: "administration", meaning: "การบริหาร"}, 
  {word: "admit", meaning: "ยอมรับ"}, {word: "adult", meaning: "ผู้ใหญ่"}, 
  {word: "affect", meaning: "ส่งผลต่อ"}, {word: "after", meaning: "หลังจาก"}, 
  {word: "again", meaning: "อีกครั้ง"}, {word: "against", meaning: "ต่อต้าน"}, 
  {word: "age", meaning: "อายุ"}, {word: "agency", meaning: "หน่วยงาน"}, 
  {word: "agent", meaning: "ตัวแทน"}, {word: "agree", meaning: "ตกลง"}, 
  {word: "ahead", meaning: "ข้างหน้า"}, {word: "air", meaning: "อากาศ"}, 
  {word: "all", meaning: "ทั้งหมด"}, {word: "allow", meaning: "อนุญาต"}, 
  {word: "almost", meaning: "เกือบจะ"}, {word: "alone", meaning: "คนเดียว"}, 
  {word: "along", meaning: "ตามแนว"}, {word: "already", meaning: "แล้ว"}, 
  {word: "also", meaning: "ด้วย"}, {word: "although", meaning: "แม้ว่า"}, 
  {word: "always", meaning: "เสมอ"}, {word: "american", meaning: "ชาวอเมริกัน"}, 
  {word: "among", meaning: "ในหมู่"}, {word: "amount", meaning: "จำนวน"}, 
  {word: "analysis", meaning: "การวิเคราะห์"}, {word: "and", meaning: "และ"}, 
  {word: "animal", meaning: "สัตว์"}, {word: "another", meaning: "อีก"}, 
  {word: "answer", meaning: "คำตอบ"}, {word: "any", meaning: "ใด ๆ"}, 
  {word: "anyone", meaning: "ใครก็ได้"}, {word: "anything", meaning: "สิ่งใด ๆ"}, 
  {word: "appear", meaning: "ปรากฏ"}, {word: "apply", meaning: "สมัคร / ใช้"}, 
  {word: "approach", meaning: "วิธีการ / เข้าใกล้"}, {word: "area", meaning: "พื้นที่"}, 
  {word: "argue", meaning: "โต้เถียง"}, {word: "arm", meaning: "แขน"}, 
  {word: "around", meaning: "รอบ ๆ"}, {word: "arrive", meaning: "มาถึง"}, 
  {word: "art", meaning: "ศิลปะ"}, {word: "article", meaning: "บทความ"}, 
  {word: "artist", meaning: "ศิลปิน"}, {word: "as", meaning: "เช่น / ขณะที่"}, 
  {word: "ask", meaning: "ถาม"}, {word: "assume", meaning: "สมมติ"}, 
  {word: "at", meaning: "ที่"}, {word: "attack", meaning: "โจมตี"}, 
  {word: "attention", meaning: "ความสนใจ"}, {word: "attorney", meaning: "ทนาย"}, 
  {word: "audience", meaning: "ผู้ชม"}, {word: "author", meaning: "ผู้แต่ง"}, 
  {word: "authority", meaning: "อำนาจ"}, {word: "available", meaning: "มีให้ใช้"}, 
  {word: "avoid", meaning: "หลีกเลี่ยง"}, {word: "away", meaning: "ไป"}, 
  {word: "baby", meaning: "ทารก"}, {word: "back", meaning: "กลับ / หลัง"}, 
  {word: "bad", meaning: "ไม่ดี"}, {word: "bag", meaning: "กระเป๋า"}, 
  {word: "ball", meaning: "ลูกบอล"}, {word: "bank", meaning: "ธนาคาร"}, 
  {word: "bar", meaning: "บาร์ / แท่ง"}, {word: "base", meaning: "ฐาน / พื้นฐาน"}, 
  {word: "be", meaning: "เป็น / อยู่"}, {word: "beat", meaning: "ตี / ชนะ"}, 
  {word: "beautiful", meaning: "สวย"}, {word: "because", meaning: "เพราะว่า"}, 
  {word: "become", meaning: "กลายเป็น"}, {word: "bed", meaning: "เตียง"}, 
  {word: "before", meaning: "ก่อน"}, {word: "begin", meaning: "เริ่ม"}, 
  {word: "behavior", meaning: "พฤติกรรม"}, {word: "behind", meaning: "อยู่ข้างหลัง"}, 
  {word: "believe", meaning: "เชื่อ"}, {word: "benefit", meaning: "ประโยชน์"}, 
  {word: "best", meaning: "ดีที่สุด"}, {word: "better", meaning: "ดีกว่า"}, 
  {word: "between", meaning: "ระหว่าง"}, {word: "beyond", meaning: "เกินกว่า"}, 
  {word: "big", meaning: "ใหญ่"}, {word: "bill", meaning: "บิล / ใบเสร็จ"}, 
  {word: "billion", meaning: "พันล้าน"}, {word: "black", meaning: "สีดำ"}, 
  {word: "blood", meaning: "เลือด"}, {word: "blue", meaning: "สีน้ำเงิน"}, 
  {word: "board", meaning: "กระดาน / คณะกรรมการ"}, {word: "body", meaning: "ร่างกาย"}, 
  {word: "book", meaning: "หนังสือ"}, {word: "born", meaning: "เกิด"}, 
  {word: "both", meaning: "ทั้งสอง"}, {word: "box", meaning: "กล่อง"}, 
  {word: "boy", meaning: "เด็กผู้ชาย"}, {word: "break", meaning: "หยุด / แตก"}, 
  {word: "bring", meaning: "นำมา"}, {word: "brother", meaning: "พี่ชาย / น้องชาย"}, 
  {word: "budget", meaning: "งบประมาณ"}, {word: "build", meaning: "สร้าง"}, 
  {word: "building", meaning: "อาคาร"}, {word: "business", meaning: "ธุรกิจ"}, 
  {word: "but", meaning: "แต่"}, {word: "buy", meaning: "ซื้อ"}, 
  {word: "by", meaning: "โดย / ด้วย"}, {word: "call", meaning: "เรียก / โทร"}, 
  {word: "camera", meaning: "กล้อง"}, {word: "campaign", meaning: "แคมเปญ"}, 
  {word: "can", meaning: "สามารถ / กระป๋อง"}, {word: "cancer", meaning: "มะเร็ง"}, 
  {word: "candidate", meaning: "ผู้สมัคร"}, {word: "capital", meaning: "เมืองหลวง / เงินทุน"}, 
  {word: "car", meaning: "รถ"}, {word: "card", meaning: "บัตร"}, 
  {word: "care", meaning: "ดูแล / ความใส่ใจ"}, {word: "career", meaning: "อาชีพ"}, 
  {word: "carry", meaning: "ถือ / พก"}, {word: "case", meaning: "กรณี"}, 
  {word: "catch", meaning: "จับ"}, {word: "cause", meaning: "สาเหตุ"}, 
  {word: "cell", meaning: "เซลล์"}, {word: "center", meaning: "ศูนย์กลาง"}, 
  {word: "central", meaning: "กลาง"}, {word: "century", meaning: "ศตวรรษ"}, 
  {word: "certain", meaning: "แน่นอน"}, {word: "certainly", meaning: "อย่างแน่นอน"}, 
  {word: "chair", meaning: "เก้าอี้"}, {word: "challenge", meaning: "ความท้าทาย"}, 
  {word: "chance", meaning: "โอกาส"}, {word: "change", meaning: "เปลี่ยน"}, 
  {word: "character", meaning: "ตัวละคร / ลักษณะ"}, {word: "charge", meaning: "เรียกเก็บ / คำสั่ง"}, 
  {word: "check", meaning: "ตรวจสอบ / เช็ค"}, {word: "child", meaning: "เด็ก"}, 
  {word: "choice", meaning: "ทางเลือก"}, {word: "choose", meaning: "เลือก"}, 
  {word: "church", meaning: "โบสถ์"}, {word: "citizen", meaning: "พลเมือง"}, 
  {word: "city", meaning: "เมือง"}, {word: "civil", meaning: "พลเรือน / กฎหมายแพ่ง"}, 
  {word: "claim", meaning: "เรียกร้อง"}, {word: "class", meaning: "ชั้นเรียน / ประเภท"}, 
  {word: "clear", meaning: "ชัดเจน"}, {word: "clearly", meaning: "อย่างชัดเจน"}, 
  {word: "close", meaning: "ปิด / ใกล้"}, {word: "coach", meaning: "โค้ช"}, 
  {word: "cold", meaning: "หนาว"}, {word: "collection", meaning: "การสะสม"}, 
  {word: "college", meaning: "วิทยาลัย"}, {word: "color", meaning: "สี"}, 
  {word: "come", meaning: "มา"}, {word: "commercial", meaning: "เชิงพาณิชย์"}, 
  {word: "common", meaning: "ทั่วไป"}, {word: "community", meaning: "ชุมชน"}, 
  {word: "company", meaning: "บริษัท"}, {word: "compare", meaning: "เปรียบเทียบ"}, 
  {word: "complete", meaning: "สมบูรณ์"}, {word: "computer", meaning: "คอมพิวเตอร์"}, 
  {word: "concern", meaning: "ความกังวล"}, {word: "condition", meaning: "สภาพ"}, 
  {word: "conference", meaning: "การประชุม"}, {word: "consider", meaning: "พิจารณา"}, 
  {word: "consumer", meaning: "ผู้บริโภค"}, {word: "contain", meaning: "บรรจุ"}, 
  {word: "continue", meaning: "ดำเนินต่อ"}, {word: "control", meaning: "ควบคุม"}, 
  {word: "cost", meaning: "ค่าใช้จ่าย"}, {word: "could", meaning: "สามารถ"}, 
  {word: "country", meaning: "ประเทศ"}, {word: "couple", meaning: "คู่"}, 
  {word: "course", meaning: "หลักสูตร"}, {word: "court", meaning: "ศาล"}, 
  {word: "cover", meaning: "ปก / คลุม"}, {word: "create", meaning: "สร้าง"}, 
  {word: "crime", meaning: "อาชญากรรม"}, {word: "cultural", meaning: "วัฒนธรรม"}, 
  {word: "culture", meaning: "วัฒนธรรม"}, {word: "cup", meaning: "ถ้วย"}, 
  {word: "current", meaning: "ปัจจุบัน"}, {word: "customer", meaning: "ลูกค้า"}, 
  {word: "cut", meaning: "ตัด"}, {word: "dark", meaning: "มืด / สีเข้ม"}, 
  {word: "data", meaning: "ข้อมูล"}, {word: "daughter", meaning: "ลูกสาว"}, 
  {word: "day", meaning: "วัน"}, {word: "dead", meaning: "ตาย"}, 
  {word: "deal", meaning: "จัดการ / ข้อตกลง"}, {word: "death", meaning: "ความตาย"}, 
  {word: "debate", meaning: "โต้วาที"}, {word: "decade", meaning: "สิบปี"}, 
  {word: "decide", meaning: "ตัดสินใจ"}, {word: "decision", meaning: "การตัดสินใจ"}, 
  {word: "deep", meaning: "ลึก"}, {word: "defense", meaning: "การป้องกัน"}, 
  {word: "degree", meaning: "ระดับ"}, {word: "democratic", meaning: "ประชาธิปไตย"}, 
  {word: "describe", meaning: "อธิบาย"}, {word: "design", meaning: "ออกแบบ"}, 
  {word: "despite", meaning: "แม้ว่า"}, {word: "detail", meaning: "รายละเอียด"}, 
  {word: "determine", meaning: "กำหนด"}, {word: "develop", meaning: "พัฒนา"}, 
  {word: "development", meaning: "การพัฒนา"}, {word: "die", meaning: "ตาย"}, 
  {word: "difference", meaning: "ความแตกต่าง"}, {word: "different", meaning: "แตกต่าง"}, 
  {word: "difficult", meaning: "ยาก"}, {word: "dinner", meaning: "อาหารเย็น"}, 
  {word: "direction", meaning: "ทิศทาง"}, {word: "director", meaning: "ผู้อำนวยการ"}, 
  {word: "discover", meaning: "ค้นพบ"}, {word: "discuss", meaning: "อภิปราย"}, 
  {word: "disease", meaning: "โรค"}, {word: "do", meaning: "ทำ"}, 
  {word: "doctor", meaning: "หมอ"}, {word: "dog", meaning: "สุนัข"}, 
  {word: "door", meaning: "ประตู"}, {word: "down", meaning: "ลง"}, 
  {word: "draw", meaning: "วาด / ดึง"}, {word: "dream", meaning: "ความฝัน"}, 
  {word: "drive", meaning: "ขับรถ"}, {word: "drop", meaning: "ลด / ปล่อย"}, 
  {word: "drug", meaning: "ยา"}, {word: "during", meaning: "ระหว่าง"}, 
  {word: "each", meaning: "แต่ละ"}, {word: "early", meaning: "แต่เช้า / เร็ว"}, 
  {word: "east", meaning: "ทิศตะวันออก"}, {word: "easy", meaning: "ง่าย"}, 
  {word: "eat", meaning: "กิน"}, {word: "economic", meaning: "เศรษฐกิจ"}, 
  {word: "economy", meaning: "เศรษฐกิจ"}, {word: "edge", meaning: "ขอบ"}, 
  {word: "education", meaning: "การศึกษา"}, {word: "effect", meaning: "ผลกระทบ"}, 
  {word: "effort", meaning: "ความพยายาม"}, {word: "eight", meaning: "แปด"}, 
  {word: "either", meaning: "อย่างใดอย่างหนึ่ง"}, {word: "election", meaning: "การเลือกตั้ง"}, 
  {word: "else", meaning: "อื่น"}, {word: "employee", meaning: "พนักงาน"}, 
  {word: "end", meaning: "จบ / สิ้นสุด"}, {word: "energy", meaning: "พลังงาน"}, 
  {word: "enjoy", meaning: "เพลิดเพลิน"}, {word: "enough", meaning: "เพียงพอ"}, 
  {word: "enter", meaning: "เข้าสู่"}, {word: "entire", meaning: "ทั้งหมด"}, 
  {word: "environment", meaning: "สภาพแวดล้อม"}, {word: "especially", meaning: "โดยเฉพาะ"}, 
  {word: "establish", meaning: "ก่อตั้ง"}, {word: "even", meaning: "แม้ว่า"}, 
  {word: "event", meaning: "เหตุการณ์"}, {word: "ever", meaning: "ตลอดเวลา"}, 
  {word: "every", meaning: "ทุก"}, {word: "everyone", meaning: "ทุกคน"}, 
  {word: "everything", meaning: "ทุกสิ่ง"}, {word: "evidence", meaning: "หลักฐาน"}, 
  {word: "exactly", meaning: "อย่างแม่นยำ"}, {word: "example", meaning: "ตัวอย่าง"}, 
  {word: "except", meaning: "ยกเว้น"}, {word: "exchange", meaning: "แลกเปลี่ยน"}, 
  {word: "excuse", meaning: "ข้อแก้ตัว"}, {word: "exercise", meaning: "การออกกำลังกาย"}, 
  {word: "exist", meaning: "มีอยู่"}, {word: "expect", meaning: "คาดหวัง"}, 
  {word: "experience", meaning: "ประสบการณ์"}, {word: "expert", meaning: "ผู้เชี่ยวชาญ"}, 
  {word: "explain", meaning: "อธิบาย"}, {word: "eye", meaning: "ตา"}
  ];

let remainingWords = [];
let currentBatch = [];
let selected = [];
let matched = 0;
let score = 0;
let timer = null;
let timeRemaining = 0;
let lockSelection = false;

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const gameArea = document.getElementById('game-area');
const timeLeftEl = document.getElementById('timeLeft');
const resultBox = document.getElementById('result-box');

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame(){
    // reset state
    clearInterval(timer);
    remainingWords = [...wordList];
    selected = [];
    matched = 0;
    score = 0;
    lockSelection = false;
    resultBox.style.display = 'none';

    timeRemaining = parseInt(document.getElementById('timerSelect').value,10) || 600;
    updateTimeDisplay();

    timer = setInterval(()=>{
        timeRemaining--;
        updateTimeDisplay();
        if(timeRemaining <= 0){ endGame(false); }
    },1000);

    nextBatch();
}

function nextBatch(){
    if(remainingWords.length === 0){
        endGame(true);
        return;
    }

    // pick 5 random words (or less if <5 left)
    const batchSize = Math.min(5, remainingWords.length);
    currentBatch = [];
    for(let i=0;i<batchSize;i++){
        const idx = Math.floor(Math.random()*remainingWords.length);
        currentBatch.push(remainingWords.splice(idx,1)[0]);
    }

    renderCards(currentBatch);
}

function renderCards(words){
    const cards = [];
    words.forEach(item =>{
        cards.push({text: item.word, pair: item.meaning});
        cards.push({text: item.meaning, pair: item.word});
    });
    shuffleArray(cards);

    gameArea.innerHTML = '';
    cards.forEach((c, idx)=>{
        const div = document.createElement('div');
        div.className = 'card';
        div.textContent = c.text;
        div.dataset.pair = c.pair;
        div.dataset.index = idx;
        div.addEventListener('click', ()=> selectCard(div));
        gameArea.appendChild(div);
    });
}

function selectCard(card){
    if(lockSelection || card.classList.contains('matched') || card.classList.contains('selected')) return;

    card.classList.add('selected');
    selected.push(card);

    if(selected.length === 2){
        lockSelection = true;
        const [a,b] = selected;
        const isMatch = (a.dataset.pair === b.textContent || b.dataset.pair === a.textContent);
        if(isMatch){
            a.classList.remove('selected'); a.classList.add('matched');
            b.classList.remove('selected'); b.classList.add('matched');
            matched++;
            score += 10;
            selected = [];
            lockSelection = false;

            // ถ้า matched ครบ batch ให้สุ่มชุดใหม่
            if(matched === currentBatch.length){
                matched = 0;
                setTimeout(nextBatch,500);
            }
        } else {
            setTimeout(()=>{
                selected.forEach(c=>c.classList.remove('selected'));
                selected = [];
                lockSelection = false;
            },600);
        }
    }
}

function endGame(win){
    clearInterval(timer);
    gameArea.innerHTML = '';
    resultBox.style.display = 'block';
    if(win){
        resultBox.innerHTML = `<h2 style="color:green">🎉 Game Win!</h2>
        <p>Score: ${score}</p>
        <p>Time used: ${parseInt((parseInt(document.getElementById('timerSelect').value,10)-timeRemaining))}s</p>`;
    } else {
        resultBox.innerHTML = `<h2 style="color:red">⏹ Game Over</h2>
        <p>Score: ${score}</p>`;
    }
}

function resetGame(){
    clearInterval(timer);
    gameArea.innerHTML = '';
    resultBox.style.display = 'none';
    timeLeftEl.textContent = '';
    remainingWords = [];
    currentBatch = [];
    selected = [];
    matched = 0;
    score = 0;
    lockSelection = false;
    timeRemaining = 0;
}

function updateTimeDisplay(){
    timeLeftEl.textContent = `⏱ Time: ${timeRemaining}s`;
}

function shuffleArray(array){
    for(let i=array.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}

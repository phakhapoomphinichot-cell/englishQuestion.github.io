const wordList = [
    {word: "abandon", meaning: "ละทิ้ง"}, {word: "benefit", meaning: "ประโยชน์"},
    {word: "collapse", meaning: "พังทลาย"}, {word: "duty", meaning: "หน้าที่"},
    {word: "essential", meaning: "จำเป็นอย่างยิ่ง"}, {word: "flexible", meaning: "ยืดหยุ่น"},
    {word: "improve", meaning: "ปรับปรุง"}, {word: "reduce", meaning: "ลดลง"},
    {word: "maintain", meaning: "รักษาไว้"}, {word: "variety", meaning: "ความหลากหลาย"},  { word: "acquire", meaning: "ได้รับ, สะสม" },
  { word: "adjust", meaning: "ปรับ, ปรับตัว" },
  { word: "analyze", meaning: "วิเคราะห์" },
  { word: "approach", meaning: "วิธีการ / เข้าใกล้" },
  { word: "area", meaning: "พื้นที่ / ด้าน" },
  { word: "assess", meaning: "ประเมิน" },
  { word: "assume", meaning: "สมมติ, สันนิษฐาน" },
  { word: "benefit", meaning: "ประโยชน์" },
  { word: "concept", meaning: "แนวคิด" },
  { word: "consistent", meaning: "สอดคล้อง" },
  { word: "consume", meaning: "ใช้ / บริโภค" },
  { word: "context", meaning: "บริบท" },
  { word: "create", meaning: "สร้าง" },
  { word: "derive", meaning: "ได้มา, ดึงมาจาก" },
  { word: "establish", meaning: "สร้าง / ก่อตั้ง" },
  { word: "evidence", meaning: "หลักฐาน" },
  { word: "factor", meaning: "ปัจจัย" },
  { word: "financial", meaning: "ทางการเงิน" },
  { word: "function", meaning: "หน้าที่ / ฟังก์ชัน" },
  { word: "identify", meaning: "ระบุ / บ่งชี้" },
  { word: "impact", meaning: "ผลกระทบ" },
  { word: "involve", meaning: "เกี่ยวข้อง / เข้าร่วม" },
  { word: "issue", meaning: "ประเด็น / ปัญหา" },
  { word: "legal", meaning: "ถูกกฎหมาย" },
  { word: "method", meaning: "วิธีการ" },
  { word: "occur", meaning: "เกิดขึ้น" },
  { word: "percent", meaning: "เปอร์เซ็นต์" },
  { word: "policy", meaning: "นโยบาย" },
  { word: "process", meaning: "กระบวนการ" },
  { word: "research", meaning: "งานวิจัย" },
  { word: "significant", meaning: "สำคัญ / มีนัยสำคัญ" },
  { word: "similar", meaning: "คล้ายกัน" },
  { word: "source", meaning: "แหล่ง" },
  { word: "structure", meaning: "โครงสร้าง" },
  { word: "theory", meaning: "ทฤษฎี" },
  { word: "vary", meaning: "แตกต่าง / แปรผัน" },
  { word: "achieve", meaning: "บรรลุผล" },
  { word: "administration", meaning: "การบริหาร" },
  { word: "appropriate", meaning: "เหมาะสม" },
  { word: "capacity", meaning: "ความสามารถ / ขนาด" },
  { word: "challenge", meaning: "ท้าทาย" },
  { word: "component", meaning: "องค์ประกอบ" },
  { word: "consequence", meaning: "ผลลัพธ์" },
  { word: "construct", meaning: "สร้าง" },
  { word: "consume", meaning: "บริโภค / ใช้" },
  { word: "contact", meaning: "ติดต่อ" },
  { word: "credit", meaning: "เครดิต / ให้เกียรติ" },
  { word: "economic", meaning: "เศรษฐกิจ" },
  { word: "environment", meaning: "สิ่งแวดล้อม" },
  { word: "establish", meaning: "ก่อตั้ง / สถาปนา" },
  { word: "estimate", meaning: "ประมาณ" },
  { word: "evident", meaning: "ชัดเจน" },
  { word: "financial", meaning: "ทางการเงิน" },
  { word: "focus", meaning: "มุ่งเน้น / จุดสนใจ" },
  { word: "impact", meaning: "ผลกระทบ" },
  { word: "income", meaning: "รายได้" },
  { word: "indicate", meaning: "บ่งชี้" },
  { word: "issue", meaning: "ประเด็น / ปัญหา" },
  { word: "maintain", meaning: "รักษาไว้" },
  { word: "major", meaning: "หลัก / สำคัญ" },
  { word: "method", meaning: "วิธีการ" },
  { word: "occur", meaning: "เกิดขึ้น" },
  { word: "perceive", meaning: "รับรู้" },
  { word: "policy", meaning: "นโยบาย" },
  { word: "principle", meaning: "หลักการ" },
  { word: "proceed", meaning: "ดำเนินการ" },
  { word: "require", meaning: "ต้องการ / จำเป็น" },
  { word: "respond", meaning: "ตอบสนอง" },
  { word: "significant", meaning: "สำคัญ" },
  { word: "source", meaning: "แหล่งที่มา" },
  { word: "strategy", meaning: "กลยุทธ์" },
  { word: "structure", meaning: "โครงสร้าง" },
  { word: "theory", meaning: "ทฤษฎี" },
  { word: "traditional", meaning: "แบบดั้งเดิม" },
  { word: "vary", meaning: "แตกต่าง" },
  { word: "versus", meaning: "เทียบกับ" },  { word: "analyze", meaning: "วิเคราะห์" },
  { word: "approach", meaning: "วิธี / เข้าใกล้" },
  { word: "area", meaning: "พื้นที่ / ด้าน" },
  { word: "assess", meaning: "ประเมิน" },
  { word: "assume", meaning: "สมมติ / สันนิษฐาน" },
  { word: "authority", meaning: "อำนาจ / ผู้มีอำนาจ" },
  { word: "available", meaning: "มีให้ / ใช้ได้" },
  { word: "benefit", meaning: "ประโยชน์" },
  { word: "capacity", meaning: "ความสามารถ / ความจุ" },
  { word: "challenge", meaning: "ความท้าทาย" },
  { word: "concept", meaning: "แนวคิด" },
  { word: "consequence", meaning: "ผลลัพธ์ / ผลที่ตามมา" },
  { word: "constitute", meaning: "ประกอบ / สร้าง" },
  { word: "context", meaning: "บริบท" },
  { word: "contract", meaning: "สัญญา" },
  { word: "create", meaning: "สร้าง" },
  { word: "data", meaning: "ข้อมูล" },
  { word: "derive", meaning: "ได้มาจาก" },
  { word: "distribute", meaning: "แจก / แจกจ่าย" },
  { word: "economic", meaning: "ทางเศรษฐกิจ" },
  { word: "environment", meaning: "สิ่งแวดล้อม" },
  { word: "establish", meaning: "ก่อตั้ง / ตั้งขึ้น" },
  { word: "estimate", meaning: "ประมาณ / ประเมิน" },
  { word: "evident", meaning: "ชัดเจน" },
  { word: "factor", meaning: "ปัจจัย" },
  { word: "finance", meaning: "การเงิน" },
  { word: "focus", meaning: "จุดสนใจ / มุ่งเน้น" },
  { word: "function", meaning: "หน้าที่ / ฟังก์ชัน" },
  { word: "identify", meaning: "ระบุ / บ่งชี้" },
  { word: "income", meaning: "รายได้" },
  { word: "indicate", meaning: "แสดง / บ่งชี้" },
  { word: "involve", meaning: "เกี่ยวข้อง / มีส่วน" },
  { word: "issue", meaning: "ประเด็น / ปัญหา" },
  { word: "legal", meaning: "ตามกฎหมาย" },
  { word: "major", meaning: "หลัก / สำคัญ" },
  { word: "method", meaning: "วิธีการ" },
  { word: "occur", meaning: "เกิดขึ้น" },
  { word: "percent", meaning: "เปอร์เซ็นต์" },
  { word: "policy", meaning: "นโยบาย" },
  { word: "principle", meaning: "หลักการ" },
  { word: "process", meaning: "กระบวนการ" },
  { word: "proceed", meaning: "ดำเนินการ" },
  { word: "require", meaning: "ต้องการ / จำเป็น" },
  { word: "research", meaning: "การวิจัย" },
  { word: "respond", meaning: "ตอบ / ตอบสนอง" },
  { word: "role", meaning: "บทบาท" },
  { word: "significant", meaning: "สำคัญ" },
  { word: "similar", meaning: "คล้ายกัน" },
  { word: "source", meaning: "แหล่ง" },
  { word: "structure", meaning: "โครงสร้าง" },
  { word: "theory", meaning: "ทฤษฎี" },
  { word: "vary", meaning: "แตกต่าง / เปลี่ยนแปลง" },  { word: "access", meaning: "เข้าถึง" },
  { word: "accompany", meaning: "ไปด้วย / ประกอบ" },
  { word: "accurate", meaning: "ถูกต้อง / แม่นยำ" },
  { word: "achieve", meaning: "บรรลุผล" },
  { word: "acknowledge", meaning: "ยอมรับ / รับรู้" },
  { word: "adapt", meaning: "ปรับตัว / ปรับใช้" },
  { word: "adequate", meaning: "เพียงพอ / เหมาะสม" },
  { word: "adjust", meaning: "ปรับ / ปรับตัว" },
  { word: "affect", meaning: "มีผลต่อ / ส่งผล" },
  { word: "allocate", meaning: "จัดสรร" },
  { word: "alter", meaning: "เปลี่ยน / ปรับ" },
  { word: "alternative", meaning: "ทางเลือก / ตัวเลือก" },
  { word: "anxious", meaning: "วิตกกังวล" },
  { word: "apparent", meaning: "ชัดเจน / เห็นได้ชัด" },
  { word: "appropriate", meaning: "เหมาะสม" },
  { word: "approximate", meaning: "โดยประมาณ" },
  { word: "articulate", meaning: "แสดงความคิดชัดเจน" },
  { word: "assess", meaning: "ประเมิน" },
  { word: "assign", meaning: "มอบหมาย / กำหนด" },
  { word: "assume", meaning: "สมมติ / สันนิษฐาน" },
  { word: "attach", meaning: "แนบ / ติด" },
  { word: "attain", meaning: "บรรลุ / ได้มา" },
  { word: "aware", meaning: "ตระหนัก / รู้ตัว" },
  { word: "benefit", meaning: "ประโยชน์" },
  { word: "brief", meaning: "สั้น / กระชับ" },
  { word: "capable", meaning: "สามารถ / มีความสามารถ" },
  { word: "capacity", meaning: "ความสามารถ / ความจุ" },
  { word: "cease", meaning: "หยุด / เลิก" },
  { word: "challenge", meaning: "ความท้าทาย" },
  { word: "circumstance", meaning: "สถานการณ์ / เงื่อนไข" },
  { word: "clarify", meaning: "ทำให้ชัดเจน" },
  { word: "collapse", meaning: "ล่ม / พังทลาย" },
  { word: "commit", meaning: "มุ่งมั่น / กระทำ" },
  { word: "communicate", meaning: "สื่อสาร" },
  { word: "community", meaning: "ชุมชน" },
  { word: "compare", meaning: "เปรียบเทียบ" },
  { word: "compete", meaning: "แข่งขัน" },
  { word: "complex", meaning: "ซับซ้อน / ยุ่งยาก" },
  { word: "compose", meaning: "ประกอบ / แต่ง" },
  { word: "comprehend", meaning: "เข้าใจ" },
  { word: "conclude", meaning: "สรุป" },
  { word: "concrete", meaning: "เป็นรูปธรรม / ชัดเจน" },
  { word: "conduct", meaning: "ดำเนินการ / จัดทำ" },
  { word: "confirm", meaning: "ยืนยัน" },
  { word: "consequence", meaning: "ผลลัพธ์ / ผลที่ตามมา" },
  { word: "consider", meaning: "พิจารณา" },
  { word: "consistent", meaning: "สอดคล้อง / คงที่" },
  { word: "constant", meaning: "คงที่ / ไม่เปลี่ยนแปลง" },
  { word: "construct", meaning: "สร้าง / ประกอบ" },
  { word: "consult", meaning: "ปรึกษา / ขอคำแนะนำ" },
  { word: "consume", meaning: "บริโภค / ใช้" },
  { word: "contribute", meaning: "มีส่วนร่วม / สนับสนุน" },
  { word: "convey", meaning: "สื่อ / ถ่ายทอด" },
  { word: "convince", meaning: "โน้มน้าว / ทำให้เชื่อ" }
];

let selected = [], matched = 0, score = 0, timeRemaining = 0, timer = null, lockSelection = false;
let remainingWords = [...wordList];
let currentWords = [];
let startTime = 0;

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const gameArea = document.getElementById('game-area');
const timeLeftEl = document.getElementById('timeLeft');
const resultBox = document.getElementById('result-box');

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame(){
    if(remainingWords.length === 0){
        showResult('🎉 Game Win!', score, 0);
        return;
    }

    clearInterval(timer);
    matched = 0; selected = []; lockSelection=false;
    resultBox.style.display='none';

    timeRemaining = parseInt(document.getElementById('timerSelect').value,10)||300;
    startTime = timeRemaining;
    updateTimeDisplay();

    timer = setInterval(()=>{
        timeRemaining--;
        updateTimeDisplay();
        if(timeRemaining<=0){ showResult('⏰ Game Over', score, startTime); }
    },1000);

    loadNextWords();
}

function loadNextWords(){
    if(remainingWords.length === 0){
        const timeUsed = startTime - timeRemaining;
        showResult('🎉 Game Win!', score, timeUsed);
        return;
    }
    currentWords = remainingWords.splice(0,5);
    const cards = [];
    currentWords.forEach(item=>{
        cards.push({text:item.word,pair:item.meaning});
        cards.push({text:item.meaning,pair:item.word});
    });
    shuffleArray(cards);

    gameArea.innerHTML='';
    cards.forEach(c=>{
        const div=document.createElement('div');
        div.className='card'; div.textContent=c.text; div.dataset.pair=c.pair;
        div.addEventListener('click',()=>selectCard(div));
        gameArea.appendChild(div);
    });
}

function resetGame(){
    clearInterval(timer);
    remainingWords=[...wordList]; gameArea.innerHTML=''; timeLeftEl.textContent=''; resultBox.style.display='none';
    matched=0; score=0; selected=[]; timeRemaining=0; lockSelection=false;
}

function selectCard(card){
    if(lockSelection||card.classList.contains('matched')||card.classList.contains('selected')) return;
    card.classList.add('selected'); selected.push(card);

    if(selected.length===2){
        lockSelection=true;
        const [a,b]=selected;
        const isMatch=(a.dataset.pair===b.textContent)||(b.dataset.pair===a.textContent);
        if(isMatch){
            a.classList.remove('selected'); a.classList.add('matched');
            b.classList.remove('selected'); b.classList.add('matched');
            matched++; score+=10; selected=[]; lockSelection=false;
            if(matched===currentWords.length) loadNextWords();
        } else {
            setTimeout(()=>{ selected.forEach(c=>c.classList.remove('selected')); selected=[]; lockSelection=false; },600);
        }
    }
}

function showResult(message, finalScore, timeUsed){
    clearInterval(timer);
    resultBox.style.display='block';
    resultBox.innerHTML=`<h3>${message}</h3><p>Score: ${finalScore}</p><p>Time used: ${timeUsed}s</p>`;
    gameArea.innerHTML='';
}

function updateTimeDisplay(){ timeLeftEl.textContent=`⏱ Time Left: ${timeRemaining}s`; }

function shuffleArray(array){ for(let i=array.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [array[i],array[j]]=[array[j],array[i]]; } }

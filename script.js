const wordList = [
  { word: "abandon", meaning: "ละทิ้ง" },
  { word: "ability", meaning: "ความสามารถ" },
  { word: "able", meaning: "สามารถ" },
  { word: "about", meaning: "เกี่ยวกับ" },
  { word: "above", meaning: "เหนือ" },
  { word: "abroad", meaning: "ต่างประเทศ" },
  { word: "absence", meaning: "การขาด" },
  { word: "absolute", meaning: "สมบูรณ์แบบ" },
  { word: "absorb", meaning: "ดูดซับ" },
  { word: "abstract", meaning: "นามธรรม" },
  { word: "abuse", meaning: "การใช้อย่างผิด / การละเมิด" },
  { word: "academic", meaning: "ทางวิชาการ" },
  { word: "accelerate", meaning: "เร่ง" },
  { word: "accept", meaning: "ยอมรับ" },
  { word: "access", meaning: "เข้าถึง" },
  { word: "accident", meaning: "อุบัติเหตุ" },
  { word: "accompany", meaning: "ไปด้วย / ประกอบ" },
  { word: "accompanying", meaning: "ที่มาพร้อม" },
  { word: "accomplish", meaning: "บรรลุ" },
  { word: "according", meaning: "ตาม" },
  { word: "account", meaning: "บัญชี / รายงาน" },
  { word: "accurate", meaning: "ถูกต้องแม่นยำ" },
  { word: "accuse", meaning: "กล่าวหา" },
  { word: "achieve", meaning: "ประสบความสำเร็จ" },
  { word: "achievement", meaning: "ความสำเร็จ" },
  { word: "acknowledge", meaning: "รับรู้ / ยอมรับ" },
  { word: "acquire", meaning: "ได้รับ / สะสม" },
  { word: "acquisition", meaning: "การได้มา" },
  { word: "across", meaning: "ข้าม / ผ่าน" },
  { word: "action", meaning: "การกระทำ" },
  { word: "active", meaning: "คล่อง / กระฉับกระเฉง" },
  { word: "actor", meaning: "นักแสดง" },
  { word: "actual", meaning: "แท้จริง / จริง" },
  { word: "adapt", meaning: "ปรับตัว" },
  { word: "add", meaning: "เพิ่ม" },
  { word: "addition", meaning: "การเพิ่ม" },
  { word: "additional", meaning: "เพิ่มเติม" },
  { word: "address", meaning: "ที่อยู่ / กล่าวถึง" },
  { word: "adequate", meaning: "เพียงพอ" },
  { word: "adjust", meaning: "ปรับ" },
  { word: "adjustment", meaning: "การปรับ" },
  { word: "administration", meaning: "การบริหาร" },
  { word: "admire", meaning: "ชื่นชม" },
  { word: "admission", meaning: "การเข้า / การยอมรับเข้า" },
  { word: "admit", meaning: "ยอมรับ" },
  { word: "adopt", meaning: "นำมาใช้ / รับเลี้ยง" },
  { word: "adult", meaning: "ผู้ใหญ่" },
  { word: "advance", meaning: "ก้าวหน้า / เดินหน้า" },
  { word: "advanced", meaning: "ขั้นสูง" },
  { word: "advantage", meaning: "ข้อได้เปรียบ" },
  { word: "adventure", meaning: "การผจญภัย" },
  { word: "advertise", meaning: "โฆษณา" },
  { word: "advice", meaning: "คำแนะนำ" },
  { word: "advise", meaning: "ให้คำแนะนำ" },
  { word: "affect", meaning: "ส่งผลต่อ" },
  { word: "afford", meaning: "สามารถจ่าย / ให้" },
  { word: "afraid", meaning: "กลัว" },
  { word: "after", meaning: "หลังจาก" },
  { word: "afternoon", meaning: "บ่าย" },
  { word: "again", meaning: "อีกครั้ง" },
  { word: "against", meaning: "ต่อ / ขัดกับ" },
  { word: "age", meaning: "อายุ / ยุค" },
  { word: "agency", meaning: "หน่วยงาน" },
  { word: "agenda", meaning: "วาระ" },
  { word: "agent", meaning: "ตัวแทน" },
  { word: "aggressive", meaning: "ก้าวร้าว / รุนแรง" },
  { word: "ago", meaning: "ผ่านมาแล้ว" },
  { word: "agree", meaning: "ตกลง" },
  { word: "agreement", meaning: "ข้อตกลง" },
  { word: "agricultural", meaning: "ทางเกษตร" },
  { word: "aid", meaning: "ความช่วยเหลือ" },
  { word: "aim", meaning: "จุดมุ่งหมาย" },
  { word: "air", meaning: "อากาศ" },
  { word: "aircraft", meaning: "เครื่องบิน" },
  { word: "alarm", meaning: "สัญญาณเตือน" },
  { word: "album", meaning: "อัลบัม" },
  { word: "alcohol", meaning: "แอลกอฮอล์" },
  { word: "alive", meaning: "มีชีวิต" },
  { word: "all", meaning: "ทั้งหมด" },
  { word: "allocate", meaning: "จัดสรร" },
  { word: "allow", meaning: "อนุญาต" },
  { word: "ally", meaning: "พันธมิตร" },
  { word: "almost", meaning: "เกือบจะ" },
  { word: "alone", meaning: "เพียงลำพัง" },
  { word: "along", meaning: "ไปตาม / ไปพร้อม" },
  { word: "already", meaning: "แล้ว" },
  { word: "also", meaning: "ด้วย / นอกจากนี้" },
  { word: "alter", meaning: "เปลี่ยน / ปรับ" },
  { word: "alternative", meaning: "ทางเลือก" },
  { word: "although", meaning: "แม้ว่า" },
  { word: "always", meaning: "เสมอ / ตลอด" },
  { word: "amazing", meaning: "น่าทึ่ง" },
  { word: "ambition", meaning: "ความทะเยอทะยาน" },
  { word: "among", meaning: "ในหมู่ / ระหว่าง" },
  { word: "amount", meaning: "ปริมาณ" },
  { word: "analyse", meaning: "วิเคราะห์ (บร.)" },
  { word: "analysis", meaning: "การวิเคราะห์" },
  { word: "ancient", meaning: "โบราณ" },
  { word: "and", meaning: "และ" },
  { word: "anger", meaning: "ความโกรธ" },
  { word: "angle", meaning: "มุม" },
  { word: "angry", meaning: "โกรธ" },
  { word: "animal", meaning: "สัตว์" },
  { word: "announce", meaning: "ประกาศ" },
  { word: "annual", meaning: "ประจำปี" },
  { word: "another", meaning: "อื่น / อีก" },
  { word: "answer", meaning: "คำตอบ / ตอบ" },
  { word: "anticipate", meaning: "คาดการณ์ / คาดหวัง" },
  { word: "anxiety", meaning: "ความวิตกกังวล" },
  { word: "anxious", meaning: "กังวล / ห่วง" },
  { word: "any", meaning: "ใด ๆ" },
  { word: "anybody", meaning: "ใครก็ได้" },
  { word: "anymore", meaning: "อีกต่อไป" },
  { word: "anyone", meaning: "ใครก็ได้" },
  { word: "anything", meaning: "อะไรก็ตาม" },
  { word: "anyway", meaning: "ยังไง / อย่างไรก็ตาม" },
  { word: "apart", meaning: "แยก / ห่าง" },
  { word: "apparent", meaning: "ชัดเจน / เห็นได้ชัด" },
  { word: "appeal", meaning: "ดึงดูด / อุทธรณ์" },
  { word: "appear", meaning: "ปรากฏ / ดูเหมือน" },
  { word: "appearance", meaning: "การปรากฏ / รูปลักษณ์" },
  { word: "apply", meaning: "ประยุกต์ / สมัคร" },
  { word: "appoint", meaning: "แต่งตั้ง" },
  { word: "appointment", meaning: "การนัดหมาย" },
  { word: "appreciate", meaning: "ชื่นชม / ซาบซึ้ง" },
  { word: "approach", meaning: "วิธี / แนวทาง / เข้าใกล้" },
  { word: "appropriate", meaning: "เหมาะสม" },
  { word: "approval", meaning: "การอนุมัติ" },
  { word: "approve", meaning: "อนุมัติ" },
  { word: "approximate", meaning: "โดยประมาณ / ใกล้เคียง" },
  { word: "architect", meaning: "สถาปนิก" },
  { word: "area", meaning: "พื้นที่ / ด้าน" },
  { word: "argue", meaning: "โต้เถียง / แย้ง" },
  { word: "argument", meaning: "ข้อโต้แย้ง" },
  { word: "arise", meaning: "เกิดขึ้น" },
  { word: "arm", meaning: "แขน / อาวุธแขน" },
  { word: "army", meaning: "กองทัพ" },
  { word: "around", meaning: "รอบ ๆ" },
  { word: "arrange", meaning: "จัด / จัดเตรียม" },
  { word: "arrangement", meaning: "การจัด / การเตรียม" },
  { word: "arrest", meaning: "จับกุม" },
  { word: "arrival", meaning: "การมาถึง" },
  { word: "arrive", meaning: "มาถึง" },
  { word: "article", meaning: "บทความ / สิ่งของ" },
  { word: "articulate", meaning: "แสดงความคิดชัดเจน" },
  { word: "artificial", meaning: "เทียม / ปลอม" },
  { word: "artist", meaning: "ศิลปิน" },
  { word: "as", meaning: "ในขณะที่ / เช่นเดียวกับ" },
  { word: "ashamed", meaning: "อาย / ขายหน้า" },
  { word: "aside", meaning: "ไปไว้ข้าง ๆ" },
  { word: "ask", meaning: "ถาม / ขอ" },
  { word: "aspect", meaning: "แง่มุม" },
  { word: "assemble", meaning: "รวมตัว / ประกอบ" },
  { word: "assert", meaning: "ยืนกราน / ยืนยัน" },
  { word: "assess", meaning: "ประเมิน" },
  { word: "asset", meaning: "ทรัพย์สิน" },
  { word: "assign", meaning: "มอบหมาย" },
  { word: "assist", meaning: "ช่วยเหลือ" },
  { word: "assistance", meaning: "ความช่วยเหลือ" },
  { word: "assistant", meaning: "ผู้ช่วย" },
  { word: "associate", meaning: "เชื่อมโยง / เพื่อนร่วมงาน" },
  { word: "association", meaning: "สมาคม / การเชื่อมโยง" },
  { word: "assume", meaning: "สมมติ / สันนิษฐาน" },
  { word: "assure", meaning: "รับประกัน" },
  { word: "at", meaning: "ที่ / ณ" },
  { word: "atmosphere", meaning: "บรรยากาศ" },
  { word: "attach", meaning: "แนบ / ติด" },
  { word: "attack", meaning: "โจมตี" },
  { word: "attempt", meaning: "ความพยายาม / พยายาม" },
  { word: "attend", meaning: "เข้าร่วม / ดูแล" },
  { word: "attention", meaning: "ความสนใจ" },
  { word: "attitude", meaning: "ทัศนคติ" },
  { word: "attract", meaning: "ดึงดูด" },
  { word: "attraction", meaning: "จุดดึงดูด" },
  { word: "attribute", meaning: "คุณลักษณะ / กล่าวถึง" },
  { word: "author", meaning: "ผู้เขียน" },
  { word: "authority", meaning: "อำนาจ / ผู้มีอำนาจ" },
  { word: "automatic", meaning: "อัตโนมัติ" },
  { word: "available", meaning: "พร้อมใช้ / มีให้" },
  { word: "average", meaning: "เฉลี่ย / ปานกลาง" },
  { word: "avoid", meaning: "หลีกเลี่ยง" },
  { word: "aware", meaning: "ตระหนัก / รู้ตัว" },
  { word: "awareness", meaning: "ความตระหนัก" },
  { word: "away", meaning: "ห่าง / จากไป" },
  { word: "awful", meaning: "น่าเกลียด / แย่มาก" },
  { word: "background", meaning: "ภูมิหลัง / เบื้องหลัง" },
  { word: "balance", meaning: "สมดุล / สำรอง" },
  { word: "bar", meaning: "แท่ง / รั้ว / ขัดขวาง" },
  { word: "bare", meaning: "เปลือย / โล่ง" },
  { word: "barrel", meaning: "ถัง" },
  { word: "barrier", meaning: "อุปสรรค" },
  { word: "base", meaning: "ฐาน / พื้นฐาน" },
  { word: "basis", meaning: "พื้นฐาน / ฐาน" },
  { word: "battle", meaning: "การต่อสู้" },
  { word: "bear", meaning: "หมี / ทน" },
  { word: "beat", meaning: "ตี / เอาชนะ" },
  { word: "beauty", meaning: "ความงาม" },
  { word: "because", meaning: "เพราะว่า" },
  { word: "become", meaning: "กลายเป็น" },
  { word: "before", meaning: "ก่อน" },
  { word: "begin", meaning: "เริ่ม" },
  { word: "behave", meaning: "ประพฤติ" },
  { word: "behavior", meaning: "พฤติกรรม" },
  { word: "behind", meaning: "ด้านหลัง" },
  { word: "believe", meaning: "เชื่อ" },
  { word: "belong", meaning: "เป็นของ / อยู่ในกลุ่ม" },
  { word: "beneficial", meaning: "มีประโยชน์" },
  { word: "beneficiary", meaning: "ผู้รับผลประโยชน์" },
  { word: "beside", meaning: "ข้าง / นอกเหนือ" },
  { word: "bet", meaning: "เดิมพัน" },
  { word: "beyond", meaning: "เกินกว่า" },
  { word: "bias", meaning: "อคติ" },
  { word: "bid", meaning: "เสนอ / ประมูล" },
  { word: "bill", meaning: "บิล / ร่างกฎหมาย" },
  { word: "bind", meaning: "ผูก / ผูกมัด" },
  { word: "biological", meaning: "ทางชีวภาพ" },
  { word: "birth", meaning: "การเกิด" },
  { word: "birthplace", meaning: "สถานที่เกิด" },
  { word: "bite", meaning: "กัด" },
  { word: "bitter", meaning: "ขม" },
  { word: "black", meaning: "สีดำ" },
  { word: "blame", meaning: "ตำหนิ" },
  { word: "blank", meaning: "ว่าง / เปล่า" },
  { word: "blind", meaning: "ตาบอด / ปิดตา" },
  { word: "block", meaning: "บล็อก / ขัดขวาง" },
  { word: "blood", meaning: "เลือด" },
  { word: "blow", meaning: "เป่า / ตี" },
  { word: "blue", meaning: "สีน้ำเงิน" },
  { word: "board", meaning: "กระดาน / คณะกรรมการ" },
  { word: "boat", meaning: "เรือ" },
  { word: "body", meaning: "ร่างกาย / ตัว" },
  { word: "bold", meaning: "กล้า / หนา" },
  { word: "bomb", meaning: "ระเบิด" },
  { word: "bond", meaning: "พันธะ / พันธะสัญญา" },
  { word: "bonus", meaning: "โบนัส / รางวัล" },
  { word: "book", meaning: "หนังสือ / จอง" },
  { word: "boom", meaning: "เฟือง / พุ่ง" },
  { word: "boost", meaning: "เพิ่ม / ส่งเสริม" },
  { word: "border", meaning: "พรมแดน / ขอบเขต" },
  { word: "boring", meaning: "น่าเบื่อ" },
  { word: "borrow", meaning: "ยืม" },
  { word: "both", meaning: "ทั้งสอง" },
  { word: "bother", meaning: "รบกวน" },
  { word: "bottle", meaning: "ขวด" },
  { word: "bottom", meaning: "ก้น / ส่วนล่าง" },
  { word: "boundary", meaning: "เขตแดน" },
  { word: "bowl", meaning: "ชาม" },
  { word: "brain", meaning: "สมอง" },
  { word: "branch", meaning: "สาขา / แขนง" },
  { word: "brand", meaning: "แบรนด์ / ยี่ห้อ" },
  { word: "breach", meaning: "การละเมิด" },
  { word: "bread", meaning: "ขนมปัง" },
  { word: "break", meaning: "แตก / หยุดพัก" },
  { word: "breakfast", meaning: "อาหารเช้า" },
  { word: "breast", meaning: "หน้าอก" },
  { word: "breath", meaning: "ลมหายใจ" },
  { word: "breathe", meaning: "หายใจ" },
  { word: "breed", meaning: "เพาะพันธุ์ / สืบพันธุ์" },
  { word: "bridge", meaning: "สะพาน" },
  { word: "brief", meaning: "สั้น / ย่อ" },
  { word: "bright", meaning: "สว่าง / ฉลาด" },
  { word: "bring", meaning: "นำมา" },
  { word: "broad", meaning: "กว้าง" },
  { word: "broadcast", meaning: "กระจายเสียง / ถ่ายทอด" },
  { word: "brother", meaning: "พี่ชาย / น้องชาย" },
  { word: "brown", meaning: "สีน้ำตาล" },
  { word: "brush", meaning: "แปรง" },
  { word: "budget", meaning: "งบประมาณ" },
  { word: "build", meaning: "สร้าง" },
  { word: "building", meaning: "อาคาร" },
  { word: "bullet", meaning: "กระสุน" },
  { word: "bunch", meaning: "กลุ่ม / มัด" },
  { word: "burn", meaning: "เผา /ไหม้" },
  { word: "burst", meaning: "ระเบิด / แตกออก" },
  { word: "bus", meaning: "รถเมล์" },
  { word: "business", meaning: "ธุรกิจ" },
  { word: "busy", meaning: "ยุ่ง" },
  { word: "but", meaning: "แต่" },
  { word: "butter", meaning: "เนย" },
  { word: "button", meaning: "ปุ่ม" },
  { word: "buy", meaning: "ซื้อ" },
  { word: "buyer", meaning: "ผู้ซื้อ" },
  { word: "by", meaning: "โดย / โดยทาง" },
];

// State
let selected = [], matched = 0, score = 0, timeRemaining = 0, timer = null, lockSelection = false;
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const gameArea = document.getElementById('game-area');
const timeLeftEl = document.getElementById('timeLeft');
const resultBox = document.getElementById('result-box');

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame(){
  clearInterval(timer);
  matched = 0; score = 0; selected = []; lockSelection = false;
  resultBox.style.display = 'none';
  timeRemaining = parseInt(document.getElementById('timerSelect').value, 10) || 600;
  updateTimeDisplay();
  
  timer = setInterval(()=>{
    timeRemaining--;
    updateTimeDisplay();
    if(timeRemaining <= 0) endGame(false);
  },1000);
  
  generateCards();
}

function generateCards(){
  const cards = [];
  wordList.forEach(item =>{
    cards.push({text:item.word, pair:item.meaning});
    cards.push({text:item.meaning, pair:item.word});
  });
  shuffleArray(cards);
  
  gameArea.innerHTML='';
  cards.forEach(c=>{
    const div = document.createElement('div');
    div.className='card';
    div.textContent=c.text;
    div.dataset.pair=c.pair;
    div.addEventListener('click',()=> selectCard(div));
    gameArea.appendChild(div);
  });
}

function selectCard(card){
  if(lockSelection || card.classList.contains('matched') || card.classList.contains('selected')) return;
  card.classList.add('selected');
  selected.push(card);
  
  if(selected.length===2){
    lockSelection=true;
    const [a,b] = selected;
    const isMatch = (a.dataset.pair===b.textContent) || (b.dataset.pair===a.textContent);
    if(isMatch){
      a.classList.remove('selected'); a.classList.add('matched');
      b.classList.remove('selected'); b.classList.add('matched');
      matched++;
      score+=10;
      selected=[];
      lockSelection=false;
      if(matched===wordList.length) endGame(true);
    }else{
      setTimeout(()=>{ selected.forEach(c=>c.classList.remove('selected')); selected=[]; lockSelection=false; },600);
    }
  }
}

function endGame(win=false){
  clearInterval(timer);
  resultBox.style.display='block';
  let html='';
  if(win){
    html=`<h2>🎉 You Win! 🎉</h2>`;
  }else{
    html=`<h2>⏰ Game Over</h2>`;
  }
  html+=`<p>Score: ${score}</p><p>Matched: ${matched} / ${wordList.length}</p>`;
  html+=`<p>Time spent: ${parseInt((parseInt(document.getElementById('timerSelect').value,10)-timeRemaining)/60)} min ${((parseInt(document.getElementById('timerSelect').value,10)-timeRemaining)%60)} sec</p>`;
  resultBox.innerHTML=html;
}

function updateTimeDisplay(){ timeLeftEl.textContent=`⏱ Time: ${timeRemaining}s`; }
function resetGame(){ clearInterval(timer); gameArea.innerHTML=''; timeLeftEl.textContent=''; resultBox.style.display='none'; matched=0; score=0; selected=[]; timeRemaining=0; lockSelection=false; }
function shuffleArray(array){ for(let i=array.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [array[i],array[j]]=[array[j],array[i]]; } }

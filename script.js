// Word list example (สามารถเติมเพิ่มได้ 100–500 คำ)
const wordList = [
  {word: "abandon", meaning: "ละทิ้ง"}, {word: "benefit", meaning: "ประโยชน์"},
  {word: "collapse", meaning: "พังทลาย"}, {word: "duty", meaning: "หน้าที่"},
  {word: "essential", meaning: "จำเป็นอย่างยิ่ง"}, {word: "flexible", meaning: "ยืดหยุ่น"},
  {word: "improve", meaning: "ปรับปรุง"}, {word: "reduce", meaning: "ลดลง"},
  {word: "maintain", meaning: "รักษาไว้"}, {word: "variety", meaning: "ความหลากหลาย"},
  {word: "acquire", meaning: "ได้รับ, สะสม"}, {word: "analyze", meaning: "วิเคราะห์"},
  {word: "approach", meaning: "วิธี / เข้าใกล้"}, {word: "assess", meaning: "ประเมิน"},
  {word: "assume", meaning: "สมมติ / สันนิษฐาน"}, {word: "concept", meaning: "แนวคิด"},
  {word: "consequence", meaning: "ผลลัพธ์"}, {word: "context", meaning: "บริบท"},
  {word: "create", meaning: "สร้าง"}, {word: "derive", meaning: "ได้มาจาก"},
  {word: "environment", meaning: "สิ่งแวดล้อม"}, {word: "establish", meaning: "ก่อตั้ง"},
  {word: "factor", meaning: "ปัจจัย"}, {word: "finance", meaning: "การเงิน"},
  {word: "function", meaning: "หน้าที่ / ฟังก์ชัน"}, {word: "identify", meaning: "ระบุ / บ่งชี้"},
  {word: "impact", meaning: "ผลกระทบ"}, {word: "issue", meaning: "ประเด็น / ปัญหา"},
  {word: "major", meaning: "หลัก / สำคัญ"}, {word: "method", meaning: "วิธีการ"},
  {word: "occur", meaning: "เกิดขึ้น"}, {word: "policy", meaning: "นโยบาย"},
  {word: "principle", meaning: "หลักการ"}, {word: "process", meaning: "กระบวนการ"},
  {word: "require", meaning: "ต้องการ / จำเป็น"}, {word: "research", meaning: "การวิจัย"},
  {word: "respond", meaning: "ตอบสนอง"}, {word: "significant", meaning: "สำคัญ"},
  {word: "source", meaning: "แหล่ง"}, {word: "structure", meaning: "โครงสร้าง"},
  {word: "theory", meaning: "ทฤษฎี"}, {word: "vary", meaning: "แตกต่าง / เปลี่ยนแปลง"}
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

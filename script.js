// Sample word list (add more as needed)
const wordList = [
  {word: "abandon", meaning: "ละทิ้ง"}, {word: "benefit", meaning: "ประโยชน์"},
  {word: "collapse", meaning: "พังทลาย"}, {word: "duty", meaning: "หน้าที่"},
  {word: "essential", meaning: "จำเป็นอย่างยิ่ง"}, {word: "flexible", meaning: "ยืดหยุ่น"},
  {word: "improve", meaning: "ปรับปรุง"}, {word: "reduce", meaning: "ลดลง"},
  {word: "maintain", meaning: "รักษาไว้"}, {word: "variety", meaning: "ความหลากหลาย"},
  {word: "acquire", meaning: "ได้รับ, สะสม"}, {word: "construct", meaning: "สร้าง"},
  {word: "expand", meaning: "ขยาย"}, {word: "harmful", meaning: "เป็นอันตราย"},
  {word: "responsible", meaning: "รับผิดชอบ"}, {word: "solution", meaning: "ทางแก้ไข"},
  {word: "predict", meaning: "ทำนาย"}, {word: "declare", meaning: "ประกาศ"},
  {word: "observe", meaning: "สังเกต"}, {word: "challenge", meaning: "ความท้าทาย"}
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

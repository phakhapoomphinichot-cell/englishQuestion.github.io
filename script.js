const wordList = [
{word: "abandon", meaning: "ละทิ้ง"}, {word: "benefit", meaning: "ประโยชน์"},
{word: "collapse", meaning: "พังทลาย"}, {word: "duty", meaning: "หน้าที่"},
{word: "essential", meaning: "จำเป็นอย่างยิ่ง"}, {word: "flexible", meaning: "ยืดหยุ่น"},
{word: "improve", meaning: "ปรับปรุง"}, {word: "reduce", meaning: "ลดลง"},
{word: "maintain", meaning: "รักษาไว้"}, {word: "variety", meaning: "ความหลากหลาย"}
];

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

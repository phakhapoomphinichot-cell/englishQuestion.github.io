/* ============================================================
   WORD BANK
   ============================================================ */
const wordBank = {
  A1: [
    {w:"cat",m:"แมว"},{w:"dog",m:"สุนัข"},{w:"bird",m:"นก"},{w:"fish",m:"ปลา"},{w:"house",m:"บ้าน"},
    {w:"car",m:"รถ"},{w:"book",m:"หนังสือ"},{w:"water",m:"น้ำ"},{w:"food",m:"อาหาร"},{w:"milk",m:"นม"},
    {w:"sun",m:"ดวงอาทิตย์"},{w:"moon",m:"ดวงจันทร์"},{w:"tree",m:"ต้นไม้"},{w:"flower",m:"ดอกไม้"},{w:"sky",m:"ท้องฟ้า"},
    {w:"red",m:"แดง"},{w:"blue",m:"น้ำเงิน"},{w:"green",m:"เขียว"},{w:"white",m:"ขาว"},{w:"black",m:"ดำ"},
    {w:"one",m:"หนึ่ง"},{w:"two",m:"สอง"},{w:"three",m:"สาม"},{w:"four",m:"สี่"},{w:"five",m:"ห้า"},
    {w:"apple",m:"แอปเปิ้ล"},{w:"bread",m:"ขนมปัง"},{w:"egg",m:"ไข่"},{w:"rice",m:"ข้าว"},{w:"sugar",m:"น้ำตาล"},
    {w:"eye",m:"ตา"},{w:"ear",m:"หู"},{w:"nose",m:"จมูก"},{w:"mouth",m:"ปาก"},{w:"hand",m:"มือ"},
    {w:"foot",m:"เท้า"},{w:"head",m:"หัว"},{w:"hair",m:"ผม"},{w:"arm",m:"แขน"},{w:"leg",m:"ขา"},
    {w:"mother",m:"แม่"},{w:"father",m:"พ่อ"},{w:"boy",m:"เด็กผู้ชาย"},{w:"girl",m:"เด็กผู้หญิง"},{w:"baby",m:"ทารก"},
    {w:"school",m:"โรงเรียน"},{w:"teacher",m:"ครู"},{w:"pen",m:"ปากกา"},{w:"bag",m:"กระเป๋า"},{w:"table",m:"โต๊ะ"},
    {w:"chair",m:"เก้าอี้"},{w:"door",m:"ประตู"},{w:"window",m:"หน้าต่าง"},{w:"bed",m:"เตียง"},{w:"lamp",m:"โคมไฟ"},
    {w:"hot",m:"ร้อน"},{w:"cold",m:"เย็น"},{w:"big",m:"ใหญ่"},{w:"small",m:"เล็ก"},{w:"good",m:"ดี"},
    {w:"bad",m:"แย่"},{w:"happy",m:"มีความสุข"},{w:"sad",m:"เศร้า"},{w:"fast",m:"เร็ว"},{w:"slow",m:"ช้า"},
    {w:"go",m:"ไป"},{w:"come",m:"มา"},{w:"eat",m:"กิน"},{w:"drink",m:"ดื่ม"},{w:"sleep",m:"นอนหลับ"},
    {w:"run",m:"วิ่ง"},{w:"walk",m:"เดิน"},{w:"sit",m:"นั่ง"},{w:"stand",m:"ยืน"},{w:"play",m:"เล่น"},
    {w:"rain",m:"ฝน"},{w:"wind",m:"ลม"},{w:"fire",m:"ไฟ"},{w:"cloud",m:"เมฆ"},{w:"snow",m:"หิมะ"},
    {w:"hat",m:"หมวก"},{w:"shoe",m:"รองเท้า"},{w:"shirt",m:"เสื้อ"},{w:"pants",m:"กางเกง"},{w:"dress",m:"ชุดกระโปรง"},
    {w:"phone",m:"โทรศัพท์"},{w:"ball",m:"ลูกบอล"},{w:"boat",m:"เรือ"},{w:"plane",m:"เครื่องบิน"},{w:"bus",m:"รถบัส"},
    {w:"banana",m:"กล้วย"},{w:"orange",m:"ส้ม"},{w:"mango",m:"มะม่วง"},{w:"grape",m:"องุ่น"},{w:"cake",m:"เค้ก"},
    {w:"horse",m:"ม้า"},{w:"cow",m:"วัว"},{w:"pig",m:"หมู"},{w:"duck",m:"เป็ด"},{w:"rabbit",m:"กระต่าย"},
  ],
  A2: [
    {w:"airport",m:"สนามบิน"},{w:"station",m:"สถานี"},{w:"market",m:"ตลาด"},{w:"hospital",m:"โรงพยาบาล"},{w:"library",m:"ห้องสมุด"},
    {w:"kitchen",m:"ห้องครัว"},{w:"bedroom",m:"ห้องนอน"},{w:"bathroom",m:"ห้องน้ำ"},{w:"garden",m:"สวน"},{w:"office",m:"สำนักงาน"},
    {w:"weather",m:"สภาพอากาศ"},{w:"season",m:"ฤดูกาล"},{w:"summer",m:"ฤดูร้อน"},{w:"winter",m:"ฤดูหนาว"},{w:"spring",m:"ฤดูใบไม้ผลิ"},
    {w:"morning",m:"ตอนเช้า"},{w:"evening",m:"ตอนเย็น"},{w:"midnight",m:"เที่ยงคืน"},{w:"today",m:"วันนี้"},{w:"tomorrow",m:"พรุ่งนี้"},
    {w:"hungry",m:"หิวข้าว"},{w:"thirsty",m:"กระหายน้ำ"},{w:"tired",m:"เหนื่อย"},{w:"angry",m:"โกรธ"},{w:"afraid",m:"กลัว"},
    {w:"pretty",m:"สวย"},{w:"ugly",m:"น่าเกลียด"},{w:"clean",m:"สะอาด"},{w:"dirty",m:"สกปรก"},{w:"loud",m:"เสียงดัง"},
    {w:"quiet",m:"เงียบ"},{w:"busy",m:"ยุ่ง"},{w:"free",m:"ว่าง"},{w:"early",m:"แต่เนิ่น"},{w:"late",m:"สาย"},
    {w:"buy",m:"ซื้อ"},{w:"sell",m:"ขาย"},{w:"cook",m:"ทำอาหาร"},{w:"study",m:"เรียน"},{w:"teach",m:"สอน"},
    {w:"learn",m:"เรียนรู้"},{w:"write",m:"เขียน"},{w:"read",m:"อ่าน"},{w:"listen",m:"ฟัง"},{w:"speak",m:"พูด"},
    {w:"help",m:"ช่วย"},{w:"open",m:"เปิด"},{w:"close",m:"ปิด"},{w:"start",m:"เริ่ม"},{w:"finish",m:"เสร็จ"},
    {w:"travel",m:"เดินทาง"},{w:"arrive",m:"มาถึง"},{w:"leave",m:"จากไป"},{w:"wait",m:"รอ"},{w:"friend",m:"เพื่อน"},
    {w:"family",m:"ครอบครัว"},{w:"neighbor",m:"เพื่อนบ้าน"},{w:"doctor",m:"หมอ"},{w:"nurse",m:"พยาบาล"},{w:"police",m:"ตำรวจ"},
    {w:"farmer",m:"ชาวนา"},{w:"driver",m:"คนขับ"},{w:"student",m:"นักเรียน"},{w:"worker",m:"คนงาน"},{w:"money",m:"เงิน"},
    {w:"price",m:"ราคา"},{w:"ticket",m:"ตั๋ว"},{w:"map",m:"แผนที่"},{w:"address",m:"ที่อยู่"},{w:"color",m:"สี"},
    {w:"size",m:"ขนาด"},{w:"shape",m:"รูปร่าง"},{w:"number",m:"ตัวเลข"},{w:"letter",m:"ตัวอักษร"},{w:"left",m:"ซ้าย"},
    {w:"right",m:"ขวา"},{w:"straight",m:"ตรงไป"},{w:"near",m:"ใกล้"},{w:"far",m:"ไกล"},{w:"up",m:"ขึ้น"},
    {w:"down",m:"ลง"},{w:"inside",m:"ข้างใน"},{w:"outside",m:"ข้างนอก"},{w:"between",m:"ระหว่าง"},{w:"always",m:"เสมอ"},
    {w:"never",m:"ไม่เคย"},{w:"sometimes",m:"บางครั้ง"},{w:"often",m:"บ่อยๆ"},{w:"again",m:"อีกครั้ง"},{w:"also",m:"เช่นกัน"},
    {w:"only",m:"เท่านั้น"},{w:"both",m:"ทั้งสอง"},{w:"each",m:"แต่ละ"},{w:"every",m:"ทุก"},{w:"sport",m:"กีฬา"},
    {w:"music",m:"ดนตรี"},{w:"movie",m:"หนัง"},{w:"hobby",m:"งานอดิเรก"},{w:"birthday",m:"วันเกิด"},{w:"holiday",m:"วันหยุด"},
  ],
  B1: [
    {w:"achieve",m:"บรรลุผล"},{w:"advice",m:"คำแนะนำ"},{w:"afford",m:"มีเงินพอ"},{w:"agree",m:"เห็นด้วย"},{w:"allow",m:"อนุญาต"},
    {w:"amazing",m:"น่าทึ่ง"},{w:"announce",m:"ประกาศ"},{w:"apply",m:"สมัคร"},{w:"appreciate",m:"ชื่นชม"},{w:"argue",m:"โต้เถียง"},
    {w:"arrange",m:"จัดการ"},{w:"avoid",m:"หลีกเลี่ยง"},{w:"behavior",m:"พฤติกรรม"},{w:"believe",m:"เชื่อ"},{w:"benefit",m:"ประโยชน์"},
    {w:"borrow",m:"ยืม"},{w:"challenge",m:"ความท้าทาย"},{w:"chance",m:"โอกาส"},{w:"character",m:"บุคลิก"},{w:"choose",m:"เลือก"},
    {w:"compare",m:"เปรียบเทียบ"},{w:"compete",m:"แข่งขัน"},{w:"complain",m:"ร้องเรียน"},{w:"complete",m:"สมบูรณ์"},{w:"consider",m:"พิจารณา"},
    {w:"continue",m:"ต่อเนื่อง"},{w:"control",m:"ควบคุม"},{w:"culture",m:"วัฒนธรรม"},{w:"curious",m:"อยากรู้"},{w:"decide",m:"ตัดสินใจ"},
    {w:"describe",m:"อธิบาย"},{w:"develop",m:"พัฒนา"},{w:"difference",m:"ความแตกต่าง"},{w:"difficult",m:"ยาก"},{w:"discuss",m:"พูดคุย"},
    {w:"discover",m:"ค้นพบ"},{w:"dream",m:"ฝัน"},{w:"earn",m:"หาเงิน"},{w:"effort",m:"ความพยายาม"},{w:"encourage",m:"ให้กำลังใจ"},
    {w:"enjoy",m:"สนุกเพลิดเพลิน"},{w:"environment",m:"สิ่งแวดล้อม"},{w:"escape",m:"หนีออกไป"},{w:"event",m:"เหตุการณ์"},{w:"experience",m:"ประสบการณ์"},
    {w:"explain",m:"อธิบาย"},{w:"fail",m:"ล้มเหลว"},{w:"famous",m:"มีชื่อเสียง"},{w:"feeling",m:"ความรู้สึก"},{w:"follow",m:"ติดตาม"},
    {w:"forgive",m:"ให้อภัย"},{w:"freedom",m:"อิสรภาพ"},{w:"friendship",m:"มิตรภาพ"},{w:"future",m:"อนาคต"},{w:"goal",m:"เป้าหมาย"},
    {w:"government",m:"รัฐบาล"},{w:"grow",m:"เติบโต"},{w:"guess",m:"เดา"},{w:"habit",m:"นิสัย"},{w:"honest",m:"ซื่อสัตย์"},
    {w:"humor",m:"อารมณ์ขัน"},{w:"imagine",m:"จินตนาการ"},{w:"improve",m:"ปรับปรุง"},{w:"include",m:"รวมถึง"},{w:"increase",m:"เพิ่มขึ้น"},
    {w:"industry",m:"อุตสาหกรรม"},{w:"influence",m:"อิทธิพล"},{w:"instead",m:"แทนที่"},{w:"interest",m:"ความสนใจ"},{w:"join",m:"เข้าร่วม"},
    {w:"journey",m:"การเดินทาง"},{w:"knowledge",m:"ความรู้"},{w:"manage",m:"จัดการ"},{w:"memory",m:"ความทรงจำ"},{w:"mention",m:"กล่าวถึง"},
    {w:"mistake",m:"ความผิดพลาด"},{w:"natural",m:"ธรรมชาติ"},{w:"necessary",m:"จำเป็น"},{w:"nervous",m:"กังวล"},{w:"offer",m:"เสนอ"},
    {w:"opinion",m:"ความคิดเห็น"},{w:"opportunity",m:"โอกาสงาม"},{w:"organize",m:"จัดระเบียบ"},{w:"passion",m:"ความหลงใหล"},{w:"patient",m:"อดทน"},
    {w:"popular",m:"เป็นที่นิยม"},{w:"prepare",m:"เตรียม"},{w:"prevent",m:"ป้องกัน"},{w:"purpose",m:"จุดประสงค์"},{w:"realize",m:"ตระหนักรู้"},
    {w:"receive",m:"ได้รับ"},{w:"recognize",m:"จำได้"},{w:"reduce",m:"ลดลง"},{w:"relationship",m:"ความสัมพันธ์"},{w:"remind",m:"เตือน"},
  ],
  B2: [
    {w:"abstract",m:"นามธรรม"},{w:"accomplish",m:"บรรลุผล"},{w:"accurate",m:"แม่นยำ"},{w:"acknowledge",m:"ยอมรับ"},{w:"adequate",m:"เพียงพอ"},
    {w:"ambiguous",m:"คลุมเครือ"},{w:"ambitious",m:"ทะเยอทะยาน"},{w:"analyze",m:"วิเคราะห์"},{w:"anticipate",m:"คาดการณ์"},{w:"apparent",m:"ชัดเจน"},
    {w:"appropriate",m:"เหมาะสม"},{w:"assumption",m:"การสันนิษฐาน"},{w:"attitude",m:"ทัศนคติ"},{w:"authority",m:"อำนาจ"},{w:"capable",m:"มีความสามารถ"},
    {w:"circumstance",m:"สถานการณ์"},{w:"coherent",m:"สอดคล้องกัน"},{w:"commitment",m:"ความมุ่งมั่น"},{w:"complex",m:"ซับซ้อน"},{w:"concept",m:"แนวคิด"},
    {w:"concern",m:"ความกังวล"},{w:"confident",m:"มั่นใจ"},{w:"conflict",m:"ความขัดแย้ง"},{w:"consequence",m:"ผลที่ตามมา"},{w:"consistent",m:"สม่ำเสมอ"},
    {w:"contrary",m:"ตรงกันข้าม"},{w:"contribute",m:"มีส่วนร่วม"},{w:"controversial",m:"เป็นที่ถกเถียง"},{w:"convince",m:"โน้มน้าว"},{w:"creativity",m:"ความคิดสร้างสรรค์"},
    {w:"criterion",m:"เกณฑ์"},{w:"crucial",m:"สำคัญมาก"},{w:"dedicate",m:"อุทิศ"},{w:"deliberate",m:"จงใจ"},{w:"demonstrate",m:"แสดงให้เห็น"},
    {w:"diverse",m:"หลากหลาย"},{w:"dominant",m:"มีอิทธิพล"},{w:"elaborate",m:"ละเอียด"},{w:"eliminate",m:"กำจัด"},{w:"emerge",m:"ปรากฏขึ้น"},
    {w:"emphasis",m:"การเน้นย้ำ"},{w:"enhance",m:"เพิ่มพูน"},{w:"evaluate",m:"ประเมิน"},{w:"evident",m:"ชัดเจน"},{w:"exceed",m:"เกินกว่า"},
    {w:"flexible",m:"ยืดหยุ่น"},{w:"fundamental",m:"พื้นฐาน"},{w:"generate",m:"สร้างขึ้น"},{w:"genuine",m:"แท้จริง"},{w:"global",m:"ทั่วโลก"},
    {w:"hypothesis",m:"สมมติฐาน"},{w:"identify",m:"ระบุ"},{w:"illustrate",m:"แสดงตัวอย่าง"},{w:"imply",m:"บอกเป็นนัย"},{w:"implement",m:"ดำเนินการ"},
    {w:"inevitable",m:"หลีกเลี่ยงไม่ได้"},{w:"interpret",m:"ตีความ"},{w:"investigate",m:"สืบสวน"},{w:"justify",m:"แสดงเหตุผล"},{w:"logical",m:"มีเหตุผล"},
    {w:"maintain",m:"รักษาไว้"},{w:"manipulate",m:"บงการ"},{w:"mechanism",m:"กลไก"},{w:"motive",m:"แรงจูงใจ"},{w:"negotiate",m:"เจรจา"},
    {w:"objective",m:"วัตถุประสงค์"},{w:"observe",m:"สังเกต"},{w:"obstacle",m:"อุปสรรค"},{w:"perceive",m:"รับรู้"},{w:"perspective",m:"มุมมอง"},
    {w:"phenomenon",m:"ปรากฏการณ์"},{w:"potential",m:"ศักยภาพ"},{w:"precise",m:"แม่นยำชัดเจน"},{w:"principle",m:"หลักการ"},{w:"priority",m:"สิ่งสำคัญสูงสุด"},
    {w:"pursue",m:"มุ่งหมาย"},{w:"relevant",m:"เกี่ยวข้อง"},{w:"resolve",m:"แก้ไขปัญหา"},{w:"significant",m:"มีนัยสำคัญ"},{w:"strategy",m:"กลยุทธ์"},
    {w:"substantial",m:"มากมาย"},{w:"sufficient",m:"เพียงพอ"},{w:"sustainable",m:"ยั่งยืน"},{w:"transform",m:"เปลี่ยนแปลง"},{w:"ultimately",m:"ในที่สุด"},
  ]
};

/* ============================================================
   STATE VARIABLES
   ============================================================ */
let currentPlayer  = null;
let selectedLevel  = null;
let selectedPairs  = 6;
let selectedTime   = 300;

const maxLivesMap   = { A1:5, A2:4, B1:3, B2:2 };
const scorePerMatch = { A1:10, A2:15, B1:20, B2:30 };

let remainingWords = [];
let currentBatch   = [];
let selected       = [];
let matched        = 0;
let totalMatched   = 0;
let score          = 0;
let lives          = 3;
let timer          = null;
let timeRemaining  = 0;
let lockSelection  = false;
let batchNum       = 0;
let startTime      = 0;
let totalWords     = 0;
let lbFilterLevel  = 'ALL';

/* ============================================================
   LOCAL STORAGE HELPERS
   ============================================================ */
function getPlayers() {
  try { return JSON.parse(localStorage.getItem('em_players') || '{}'); }
  catch(e) { return {}; }
}

function savePlayers(p) {
  try { localStorage.setItem('em_players', JSON.stringify(p)); }
  catch(e) {}
}

function saveScore(name, level, sc) {
  const players = getPlayers();
  const key = name.toLowerCase();
  if (!players[key]) players[key] = { name, best: {} };
  if (!players[key].best[level] || sc > players[key].best[level])
    players[key].best[level] = sc;
  savePlayers(players);
}

function getLeaderboard(level) {
  const players = getPlayers();
  const rows = [];
  Object.values(players).forEach(p => {
    if (level === 'ALL') {
      const total = Object.values(p.best || {}).reduce((a, b) => a + b, 0);
      if (total > 0) rows.push({ name: p.name, score: total, level: 'ALL' });
    } else {
      const best = (p.best || {})[level];
      if (best) rows.push({ name: p.name, score: best, level });
    }
  });
  return rows.sort((a, b) => b.score - a.score);
}

/* ============================================================
   LOGIN
   ============================================================ */
document.getElementById('name-input').addEventListener('input', function() {
  document.getElementById('login-btn').disabled = this.value.trim().length < 2;
});

document.getElementById('name-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && this.value.trim().length >= 2) doLogin();
});

function initLogin() {
  const players = getPlayers();
  const names = Object.values(players).sort((a, b) => {
    const aM = Math.max(...(Object.values(a.best || {}).length ? Object.values(a.best || {}) : [0]));
    const bM = Math.max(...(Object.values(b.best || {}).length ? Object.values(b.best || {}) : [0]));
    return bM - aM;
  }).slice(0, 6);

  if (names.length > 0) {
    document.getElementById('player-history').style.display = 'block';
    const list = document.getElementById('prev-players');
    list.innerHTML = '';
    names.forEach(p => {
      const best = Math.max(...(Object.values(p.best || {}).length ? Object.values(p.best || {}) : [0]));
      const div = document.createElement('div');
      div.className = 'player-item';
      div.innerHTML = `<span class="p-name">👤 ${p.name}</span><span class="p-score">${best} pts</span>`;
      div.onclick = () => {
        document.getElementById('name-input').value = p.name;
        document.getElementById('login-btn').disabled = false;
        doLogin();
      };
      list.appendChild(div);
    });
  }
}

function doLogin() {
  const name = document.getElementById('name-input').value.trim();
  if (name.length < 2) return;
  currentPlayer = name;
  document.getElementById('badge-name').textContent = name;
  document.getElementById('badge-avatar').textContent = name[0].toUpperCase();
  showScreen('setup-screen');
  renderLB('ALL');
}

/* ============================================================
   SETUP
   ============================================================ */
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('play-tab').style.display = tabId === 'play-tab' ? 'block' : 'none';
  document.getElementById('lb-tab').style.display   = tabId === 'lb-tab'   ? 'block' : 'none';
  if (tabId === 'lb-tab') renderLB(lbFilterLevel);
}

function selectLevel(lv, el) {
  document.querySelectorAll('.level-card').forEach(c => {
    c.style.opacity = '0.5';
    c.style.transform = 'scale(0.97)';
  });
  el.style.opacity = '1';
  el.style.transform = 'scale(1.04)';
  selectedLevel = lv;
  const btn = document.getElementById('main-start-btn');
  btn.disabled = false;
  btn.textContent = `🚀 เริ่มเล่นระดับ ${lv}!`;
}

function selectPill(el, type) {
  el.closest('.pill-row').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  if (type === 'pairs') selectedPairs = parseInt(el.dataset.pairs);
  if (type === 'time')  selectedTime  = parseInt(el.dataset.time);
}

/* ============================================================
   GAME LOGIC
   ============================================================ */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startGame() {
  if (!selectedLevel) return;
  remainingWords = shuffleArray([...wordBank[selectedLevel]]);
  totalWords     = remainingWords.length;
  selected       = [];
  matched        = 0;
  totalMatched   = 0;
  score          = 0;
  lives          = maxLivesMap[selectedLevel];
  timeRemaining  = selectedTime;
  lockSelection  = false;
  batchNum       = 0;
  startTime      = Date.now();

  showScreen('game-screen');
  updateHUD();
  updateProgress();
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateHUD();
    if (timeRemaining <= 0) endGame(false, 'time');
  }, 1000);
  nextBatch();
}

function nextBatch() {
  if (remainingWords.length === 0) { endGame(true); return; }
  batchNum++;
  const size = Math.min(selectedPairs, remainingWords.length);
  currentBatch = remainingWords.splice(0, size);
  matched = 0;
  renderCards(currentBatch);
  document.getElementById('batch-info').textContent =
    `รอบที่ ${batchNum} • คำที่เหลือ ${remainingWords.length} คำ`;
}

function renderCards(words) {
  const cards = [];
  words.forEach(item => {
    cards.push({ text: item.m, pair: item.w, side: 'left' });  // ไทย = ซ้าย
    cards.push({ text: item.w, pair: item.m, side: 'right' }); // อังกฤษ = ขวา
  });
  shuffleArray(cards);
  const area = document.getElementById('game-area');
  area.innerHTML = '';
  cards.forEach((c, idx) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = c.text;
    div.dataset.pair = c.pair;
    div.dataset.index = idx;
    div.addEventListener('click', () => selectCard(div));
    area.appendChild(div);
  });
}

function selectCard(card) {
  if (lockSelection || card.classList.contains('matched') || card.classList.contains('selected')) return;
  card.classList.add('selected');
  selected.push(card);

  if (selected.length === 2) {
    lockSelection = true;
    const [a, b] = selected;
    const isMatch = (a.dataset.pair === b.textContent && b.dataset.pair === a.textContent);

    if (isMatch) {
      a.classList.remove('selected'); a.classList.add('matched');
      b.classList.remove('selected'); b.classList.add('matched');
      matched++;
      totalMatched++;
      const pts = scorePerMatch[selectedLevel];
      score += pts;
      showScorePopup('+' + pts, b);
      selected = [];
      lockSelection = false;
      updateHUD();
      updateProgress();
      if (matched === currentBatch.length) setTimeout(nextBatch, 600);
    } else {
      a.classList.add('wrong');
      b.classList.add('wrong');
      lives--;
      updateHUD();
      setTimeout(() => {
        a.classList.remove('selected', 'wrong');
        b.classList.remove('selected', 'wrong');
        selected = [];
        lockSelection = false;
      }, 700);
      if (lives <= 0) setTimeout(() => endGame(false, 'lives'), 800);
    }
  }
}

function updateHUD() {
  document.getElementById('score-display').textContent = score;
  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  const tEl = document.getElementById('timer-display');
  tEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
  tEl.style.color = timeRemaining <= 30 ? '#ff6b6b' : '#4d96ff';
  const maxH = maxLivesMap[selectedLevel];
  let hearts = '';
  for (let i = 0; i < maxH; i++) hearts += i < lives ? '❤️' : '🖤';
  document.getElementById('lives-display').textContent = hearts;
}

function updateProgress() {
  document.getElementById('progress-bar').style.width =
    Math.min(100, Math.round(totalMatched / totalWords * 100)) + '%';
}

function showScorePopup(text, card) {
  const el = document.createElement('div');
  el.className = 'score-popup';
  el.textContent = text;
  const rect = card.getBoundingClientRect();
  el.style.left = (rect.left + rect.width / 2 - 20) + 'px';
  el.style.top  = (rect.top + window.scrollY) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

/* ============================================================
   END GAME & RESULT
   ============================================================ */
function endGame(win, reason) {
  clearInterval(timer);
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  saveScore(currentPlayer, selectedLevel, score);
  showScreen('result-screen');

  document.getElementById('result-emoji').textContent =
    win ? '🏆' : reason === 'lives' ? '💔' : '⏰';

  const rt = document.getElementById('result-title');
  rt.className = 'result-title ' + (win ? 'win' : 'lose');
  rt.textContent = win ? 'ชนะแล้ว! 🎉' : reason === 'lives' ? 'หมดชีวิต!' : 'หมดเวลา!';

  document.getElementById('result-sub').textContent = win
    ? `จับคู่ครบทุกคำ ${selectedLevel} แล้ว! เก่งมาก!`
    : 'ไม่เป็นไร ลองใหม่ได้เลยนะ 💪';

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-pairs').textContent = totalMatched;
  document.getElementById('final-lives').textContent = Math.max(0, lives);
  document.getElementById('final-time').textContent  = elapsed + 's';

  const lb   = getLeaderboard(selectedLevel);
  const rank = lb.findIndex(r => r.name.toLowerCase() === currentPlayer.toLowerCase()) + 1;
  document.getElementById('result-rank-info').textContent =
    rank > 0 ? `🏅 อันดับของคุณระดับ ${selectedLevel}: #${rank} จาก ${lb.length} คน` : '';
}

function restartGame() { startGame(); }

/* ============================================================
   LEADERBOARD
   ============================================================ */
function filterLB(el) {
  document.querySelectorAll('.lb-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  lbFilterLevel = el.dataset.lv;
  renderLB(lbFilterLevel);
}

function renderLB(level) {
  const rows = getLeaderboard(level);
  const container = document.getElementById('lb-list');
  if (!container) return;
  if (rows.length === 0) {
    container.innerHTML = '<div class="no-data">ยังไม่มีข้อมูล<br>เล่นแล้วมาติดอันดับกัน! 🎮</div>';
    return;
  }
  const rankEmoji = ['🥇', '🥈', '🥉'];
  container.innerHTML = rows.slice(0, 20).map((r, i) => {
    const isMe = r.name.toLowerCase() === (currentPlayer || '').toLowerCase();
    return `<div class="lb-row" style="${isMe ? 'border-color:#ffd93d50;background:#ffd93d08;' : ''}">
      <div class="lb-rank">${rankEmoji[i] || (i + 1)}</div>
      <div style="flex:1">
        <div class="lb-name">${isMe ? '⭐ ' : ''}${r.name}</div>
        <div class="lb-level">${level === 'ALL' ? 'รวมทุกระดับ' : 'ระดับ ' + r.level}</div>
      </div>
      <div class="lb-score">${r.score.toLocaleString()}</div>
    </div>`;
  }).join('');
}

/* ============================================================
   SCREEN NAVIGATION
   ============================================================ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.add('active');
  if (id === 'setup-screen') renderLB(lbFilterLevel || 'ALL');
}

/* ============================================================
   INIT
   ============================================================ */
initLogin();

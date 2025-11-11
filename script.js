// ฟังก์ชันเริ่มฝึก
document.getElementById("startBtn").addEventListener("click", function() {
    // ดึงค่าจากการเลือก
    const difficulty = document.getElementById("difficulty").value;
    const numQuestions = document.getElementById("questions").value;

    // แสดงผลลัพธ์
    const resultsText = document.getElementById("resultsText");
    resultsText.innerHTML = `คุณเลือกระดับความยาก: ${difficulty} และจำนวนข้อสอบ: ${numQuestions} ข้อ`;

    // แสดงกล่องผลลัพธ์
    const quizResults = document.getElementById("quizResults");
    quizResults.classList.remove("hidden");

    // สร้างคำถาม (ตัวอย่าง)
    createQuiz(difficulty, numQuestions);
});

// ฟังก์ชันสร้างคำถาม
function createQuiz(difficulty, numQuestions) {
    // ตัวอย่างคำถาม
    const questions = {
        A1: ["What is your name?", "Where do you live?", "How old are you?"],
        A2: ["What is your favorite color?", "Where are you from?", "What time is it?"],
        B1: ["How do you feel about learning English?", "What are your hobbies?", "Can you describe your daily routine?"],
        B2: ["What is the most challenging aspect of learning a new language?", "How do you improve your vocabulary?"],
        C1: ["Can you explain the difference between formal and informal language?", "What are the benefits of learning multiple languages?"],
        C2: ["Can you discuss the philosophical implications of language learning?", "What is the role of language in shaping identity?"]
    };

    // เลือกคำถามจากระดับความยาก
    const selectedQuestions = questions[difficulty] || [];
    const numQuestionsToShow = Math.min(numQuestions, selectedQuestions.length);

    let quizHTML = "<ul>";
    for (let i = 0; i < numQuestionsToShow; i++) {
        quizHTML += `<li>${selectedQuestions[i]}</li>`;
    }
    quizHTML += "</ul>";

    resultsText.innerHTML += `<br>คำถามที่เลือก: <br>${quizHTML}`;
}

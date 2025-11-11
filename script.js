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
    // ตัวอย่างคำถามพร้อมตัวเลือกและเฉลย
    const questions = {
        A1: [
            {
                question: "What is your name?",
                options: ["John", "Mike", "Sara", "David"],
                answer: "John"
            },
            {
                question: "Where do you live?",
                options: ["USA", "UK", "Thailand", "Canada"],
                answer: "Thailand"
            },
            {
                question: "How old are you?",
                options: ["10", "20", "30", "40"],
                answer: "20"
            }
        ],
        A2: [
            {
                question: "What is your favorite color?",
                options: ["Red", "Blue", "Green", "Yellow"],
                answer: "Blue"
            },
            {
                question: "Where are you from?",
                options: ["USA", "Canada", "Japan", "Thailand"],
                answer: "Japan"
            },
            {
                question: "What time is it?",
                options: ["Morning", "Afternoon", "Evening", "Night"],
                answer: "Morning"
            }
        ],
        B1: [
            {
                question: "How do you feel about learning English?",
                options: ["Good", "Bad", "Confused", "Excited"],
                answer: "Excited"
            },
            {
                question: "What are your hobbies?",
                options: ["Reading", "Swimming", "Painting", "Travelling"],
                answer: "Travelling"
            },
            {
                question: "Can you describe your daily routine?",
                options: ["Work, Eat, Sleep", "Work, Study, Play", "Sleep, Eat, Play", "Study, Sleep, Work"],
                answer: "Work, Study, Play"
            }
        ],
        B2: [
            {
                question: "What is the most challenging aspect of learning a new language?",
                options: ["Grammar", "Vocabulary", "Speaking", "Listening"],
                answer: "Grammar"
            },
            {
                question: "How do you improve your vocabulary?",
                options: ["Read Books", "Watch Movies", "Practice Speaking", "Listen to Music"],
                answer: "Read Books"
            }
        ],
        C1: [
            {
                question: "Can you explain the difference between formal and informal language?",
                options: ["Yes", "No", "Not Sure", "Maybe"],
                answer: "Yes"
            },
            {
                question: "What are the benefits of learning multiple languages?",
                options: ["Cultural Understanding", "Better Job Opportunities", "Improved Cognitive Skills", "All of the Above"],
                answer: "All of the Above"
            }
        ],
        C2: [
            {
                question: "Can you discuss the philosophical implications of language learning?",
                options: ["Yes", "No", "Maybe", "Not Interested"],
                answer: "Yes"
            },
            {
                question: "What is the role of language in shaping identity?",
                options: ["It doesn't shape identity", "It shapes personality", "It defines culture", "It is irrelevant"],
                answer: "It shapes personality"
            }
        ]
    };

    // เลือกคำถามจากระดับความยาก
    const selectedQuestions = questions[difficulty] || [];
    const numQuestionsToShow = Math.min(numQuestions, selectedQuestions.length);

    let quizHTML = "<ul>";
    for (let i = 0; i < numQuestionsToShow; i++) {
        const q = selectedQuestions[i];
        quizHTML += `<li>
            <p><strong>${q.question}</strong></p>
            <ul>
                ${q.options.map(option => `<li>${option}</li>`).join('')}
            </ul>
            <p><em>เฉลย: ${q.answer}</em></p>
        </li>`;
    }
    quizHTML += "</ul>";

    // แสดงคำถามและเฉลย
    resultsText.innerHTML += `<br>คำถามที่เลือก: <br>${quizHTML}`;
}

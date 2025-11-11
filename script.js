// ตัวอย่างคำถามสำหรับแต่ละระดับภาษา (A1 - C2)
const questions = {
    A1: [
        { question: "What is your name?", answer: "My name is [Name]." },
        { question: "How old are you?", answer: "I am [Age] years old." },
        { question: "Where do you live?", answer: "I live in [City]." },
        { question: "What time is it?", answer: "It is [Time]." },
        { question: "How are you?", answer: "I am fine, thank you." },
        // เพิ่มคำถาม 50 ข้อในระดับ A1 ที่นี่
    ],
    A2: [
        { question: "What do you do?", answer: "I am a [Job]." },
        { question: "Where do you live?", answer: "I live in [City]." },
        { question: "What is your favorite food?", answer: "My favorite food is [Food]." },
        { question: "What is your hobby?", answer: "My hobby is [Hobby]." },
        { question: "Do you have any pets?", answer: "Yes, I have [Pets]." },
        // เพิ่มคำถาม 50 ข้อในระดับ A2 ที่นี่
    ],
    B1: [
        { question: "What is your favorite movie?", answer: "My favorite movie is [Movie]." },
        { question: "What kind of music do you like?", answer: "I like [Genre] music." },
        { question: "Do you like traveling?", answer: "Yes, I love traveling." },
        { question: "How do you spend your weekends?", answer: "I spend my weekends [Activity]." },
        { question: "What is your dream job?", answer: "My dream job is [Job]." },
        // เพิ่มคำถาม 50 ข้อในระดับ B1 ที่นี่
    ],
    B2: [
        { question: "What are the benefits of learning English?", answer: "Learning English can help you [Benefits]." },
        { question: "Do you prefer reading books or watching movies?", answer: "I prefer [Choice]." },
        { question: "How would you improve your English skills?", answer: "I would [Method]." },
        { question: "What are the advantages of living in a big city?", answer: "Living in a big city offers [Advantages]." },
        { question: "How do you stay motivated?", answer: "I stay motivated by [Method]." },
        // เพิ่มคำถาม 50 ข้อในระดับ B2 ที่นี่
    ],
    C1: [
        { question: "What are the challenges of learning a new language?", answer: "The challenges include [Challenges]." },
        { question: "Do you think technology will change the way we learn in the future?", answer: "Yes, I believe that [Reason]." },
        { question: "What are the social implications of globalization?", answer: "Globalization can have [Implications]." },
        { question: "How would you solve environmental issues?", answer: "To solve environmental issues, we need [Solutions]." },
        { question: "What is the impact of social media on society?", answer: "Social media has [Impact]." },
        // เพิ่มคำถาม 50 ข้อในระดับ C1 ที่นี่
    ],
    C2: [
        { question: "How do you handle stress in a professional environment?", answer: "I handle stress by [Method]." },
        { question: "What are your thoughts on globalization?", answer: "I think globalization is [Opinion]." },
        { question: "How do you evaluate a successful career?", answer: "A successful career is [Definition]." },
        { question: "What are the ethical implications of artificial intelligence?", answer: "AI has ethical concerns like [Concerns]." },
        { question: "What is your opinion on the future of education?", answer: "I believe education will evolve through [Technology/Methods]." },
        // เพิ่มคำถาม 50 ข้อในระดับ C2 ที่นี่
    ]
};

// ฟังก์ชันจัดการการส่งฟอร์ม
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า

    var level = document.getElementById('level').value;
    var questionsCount = parseInt(document.getElementById('questions').value);

    if (level && questionsCount === 50) {
        // เลือกคำถามตามระดับที่ผู้ใช้เลือก
        const selectedQuestions = questions[level];

        // สุ่มคำถามจากระดับที่เลือก และจำกัดจำนวน 50 ข้อ
        let selectedQuestionsList = [];
        for (let i = 0; i < questionsCount; i++) {
            let randomIndex = Math.floor(Math.random() * selectedQuestions.length);
            selectedQuestionsList.push(selectedQuestions[randomIndex]);
        }

        // แสดงคำถามที่สุ่มออกมา
        let resultContent = `You have chosen level: ${


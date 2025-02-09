const titleElement = document.getElementById('title')
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const bottomElements = document.getElementById('bottomElements')
const scoreElement = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const progressIndicator = document.getElementById("progressIndicator");
const tryAgainBtn = document.getElementById('tryAgain')
const resultElement = document.getElementById('result')
const finalScoreElement = document.getElementById('finalScore')


// questions and options for the quiz
const quizData = [
    {
        question: "What is the fastest animal?",
        options: ["Cheetah", "Sailfish", "Peregrine falcon", "Golden eagle"],
        correctAnswer: "Peregrine falcon"
    },
    {
        question: "How many countries are in africa?",
        options: [54, 60, 49, 57],
        correctAnswer: 54
    },
    {
        question: "Which of these players has the most hat-tricks in La Liga?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Luis Suárez", "Telmo Zarra"],
        correctAnswer: "Lionel Messi"
    },
    {
        question: "Who is the most streamed hiphop artist of all time?",
        options: ["Eminem", "Kanye West", "Kendrick Lamar", "Drake"],
        correctAnswer: "Drake"
    },
    {
        question: "What is the largest city in the world?",
        options: ["Delhi", "Shanghai", "New York", "Tokyo"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which of these is the country with the largest population currently",
        options: ["china", "Brazil", "India", "USA"],
        correctAnswer: "India"
    },
    {
        question: "what is the animal with the shortest life span",
        options: ["Dragonfly", "Mayfly", "Mosquito", "Drone ant"],
        correctAnswer: "Mayfly"
    },
    {
        question: "who is the first african UFC champion?",
        options: ["Israel Adesanya", "Kamaru Usman", "Francis Ngannou", "Dricus du Plessis"],
        correctAnswer: "Kamaru Usman"
    },
    {
        question: "What was the most streamed song of 2024",
        options: ["Birds of a Feather by Billie Eilish", "Espresso by Sabrina Carpenter", "Not Like Us by Kendrick Lamar", "Cruel Summer by Taylor Swift"],
        correctAnswer: "Birds of a Feather by Billie Eilish"
    },
    {
        question: "Which of these players holds the record for the most three point made in the NBA?",
        options: ["Ray Allen", "Stephen Curry", "James Harden", "Reggie Miller"],
        correctAnswer: "Stephen Curry"
     }
];


let score = 0;
let currentQuestionIndex = 0;
let selectedOption;
let selectedOptionElement;


// load the question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const singleOptionElement = document.createElement('button');
        singleOptionElement.classList.add('option');
        singleOptionElement.textContent = option;
        singleOptionElement.addEventListener('click', () => selectOption(option, singleOptionElement));
        optionsElement.appendChild(singleOptionElement);
    })
    progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    nextBtn.disabled = true;
}

// select an option
function selectOption(option, element) {
    selectedOption = option
    selectedOptionElement = element
    const currentQuestion = quizData[currentQuestionIndex]
    nextBtn.disabled = false
    return
}

// marks the question then move to the next or end the quiz if that's the last question
nextBtn.addEventListener('click', () => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
        score++;
        scoreElement.innerHTML = `Score: ${score}`
        selectedOptionElement.style.backgroundColor = '#75b798'
        selectedOptionElement.style.color = '#051b11'
    } else {
        selectedOptionElement.style.backgroundColor = '#ea868f'
        selectedOptionElement.style.color = '#2c0b0e'  
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(loadQuestion, 1000)
    } else {
        setTimeout(showResult, 1000)
    }
})

// shows the result of the quiz
function showResult() {
    titleElement.textContent = 'Quiz Ended';
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    bottomElements.style.display = 'none';
    resultElement.style.display = 'block';
    finalScoreElement.textContent = `Your score: ${score} / ${quizData.length}`;
}

// restarts the quiz
tryAgainBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerHTML = `Score: ${score}`;
    titleElement.textContent = 'Quiz App';
    resultElement.style.display = 'none';
    bottomElements.style.display = 'flex';
    loadQuestion();
})

loadQuestion()
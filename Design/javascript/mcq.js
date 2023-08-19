const questions = [

    {

        question: "Question goes here",

        answers: [

            { text: "Answer goes here", correct: false },
            { text: "Answer goes here", correct: false },
            { text: "Answer goes here (correct)", correct: true },
            { text: "Answer goes here", correct: false },

        ]

    },

    {

        question: "Question goes here",
        answers: [

            { text: "Answer goes here (correct)", correct: true },
            { text: "Answer goes here", correct: false },
            { text: "Answer goes here", correct: false },
            { text: "Answer goes here", correct: false },

        ]

    },

    {

        question: "Question goes here",
        answers: [

            { text: "Answer goes here", correct: false },
            { text: "Answer goes here", correct: false },
            { text: "Answer goes here", correct: false },
            { text: "Answer goes here (correct)", correct: true },

        ]

    },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {

            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState() {

    nextButton.style.display = "none";
    while (answerButton.firstChild) {

        answerButton.removeChild(answerButton.firstChild);

    }

}

function selectAnswer(e) {

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {

        selectedBtn.classList.add("correct");
        score++;

    } else {

        selectedBtn.classList.add("incorrect");

    }

    Array.from(answerButton.children).forEach(button => {

        if (button.dataset.correct === "true") {

            button.classList.add("correct");

        }

        button.disabled = true;

    });

    nextButton.style.display = "block";

}

function showScore() {

    let finalScore = calculateScore();
    resetState();
    redirect();
    /*questionElement.innerHTML = "You scored ${score} out of ${questions.length}!";
    nextButton.innerHTML = "Play Again?";
    nextButton.style.display = "block";*/

}

function calculateScore() {

    let finalScore = score / questions.length;
    return finalScore;

}

function redirect() {

    window.location = "response-recorded.html";

}

function handleNextButton() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showScore();

    }

}

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length) {

        handleNextButton();

    } else {

        startQuiz();

    }

});

startQuiz();
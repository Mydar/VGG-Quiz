const questionList = [
    {
        question: 'In what year was VGG launched?',
        answer: '2010',
        point: 10
    },
    {
        question: 'VGG initially started with 3 partners: Bunmi Akinyemiju, Demola Idowu and who? ',
        answer: 'KUNMI DEMUREN',
        point: 10
    },
    {
        question: 'How many Strategic Business units (SBUs) does VGG have?',
        answer: '6',
        point: 10
    },
    {
        question: 'What is VGG investment arm called?',
        answer: 'GREEN HOUSE CAPITAL',
        point: 10
    },
    {
        question: 'What is the Venture Garden Group office/campus called?',
        answer: 'VIBRANIUM VALLEY',
        point: 10
    },
    {
        question: 'What is the name of the meeting room at VGG that depicts the future?',
        answer: '2050',
        point: 10
    },
    {
        question: 'In what year did the first ever VGG virtual internship program commence?',
        answer: '2020',
        point: 10
    },
    {
        question: 'How many track channels are available on the VGG internship program platform?',
        answer: '5',
        point: 10
    },
    {
        question: 'Which SBU is reposible for providing technology solutions in the energy sector?',
        answer: 'POWERTECH',
        point: 10
    },
    {
        question: 'Who is the CEO of Venture Garden Group',
        answer: 'BUNMI AKINYEMIJU',
        point: 10
    }
]

const points = [];
let currentQuestionIndex = 0;
let hasStartedQuiz = false;
const questionText = document.getElementById('text');
const input = document.getElementById("input");

function startQuiz() {
    document.getElementById('input').style.visibility = 'visible';
    updateDisplayQuestion(questionList[currentQuestionIndex]);
}

function handleSubmitButtonClick() {
    if (!hasStartedQuiz) {
        startQuiz();
        hasStartedQuiz = true;
    } else {
        handleAnswerSubmission();
        currentQuestionIndex++;
        displayNextQuestion();
    }
}

function displayNextQuestion() {
    if (currentQuestionIndex === questionList.length) {
        displayQuizCompletedMessage(getTotalPoints());
    } else {
        updateDisplayQuestion(questionList[currentQuestionIndex]);
        document.getElementById('previous').style.visibility = 'visible';
    }

}

function handleAnswerSubmission() {
    const userResponse = input.value;
    const currentQuestion = questionList[currentQuestionIndex];
    updatePoints(currentQuestion, isCorrectAnswerForQuestion(userResponse, currentQuestion));
}

function isCorrectAnswerForQuestion(userResponse, currentQuestion) {
    return userResponse.toUpperCase() === currentQuestion.answer;
}

function updatePoints(currentQuestion, isCorrectAnswer) {
    points.push(isCorrectAnswer ? currentQuestion.point : 0);
};

function updateDisplayQuestion(currentQuestion) {
    input.value = '';
    questionText.innerText = currentQuestion.question;
    document.getElementById('question_selector').innerHTML = `Question ${currentQuestionIndex + 1} of ${questionList.length}`;
}

function getTotalPoints() {
    return points.reduce((accumulator, previousValue) => accumulator + previousValue);
}


function displayQuizCompletedMessage(finalScore) {
    document.getElementById("container").innerHTML = `<h1>Congratulations! You completed the quiz with a total of  ${finalScore} points!</h1>`;
    document.getElementById("container").style.color = 'white';
    document.getElementById('previous').style.visibility = 'hidden';
}


function onclickPrevious() {
  	currentQuestionIndex--;
    updateDisplayQuestion(questionList[currentQuestionIndex]);
    points.pop();

}

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    handleSubmitButtonClick();
});

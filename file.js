const countdownDate = new Date().getTime() + 90 * 60 * 1000; // 90 minutes in milliseconds

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const minutes = Math.floor(distance / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerText = "Time's up!";
    }
};

updateCountdown();


const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

function showQuestion(index) {
    questions.forEach((question, i) => {
        if (i === index) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        // All questions have been answered
        // alert('You have answered all the questions.');
    }
}

function showPreviousQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        showQuestion(currentQuestionIndex);
    } else {
        currentQuestionIndex = 0;
    }
}

function goToPreviousQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }
    showQuestion(currentQuestionIndex);
}

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('previousButton');

nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', goToPreviousQuestion);

showQuestion(currentQuestionIndex);


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".qnum button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("clicked");
        });
    });
});



function highlightButton(index) {
    const buttons = document.querySelectorAll('.row-num button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[index].classList.add('active');

    currentQuestionIndex = index;
    showQuestion(currentQuestionIndex);
}


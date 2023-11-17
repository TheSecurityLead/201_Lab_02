'use strict';

var userName;
var questions = [
    'Do I have children?',
    'Was I in the Navy?',
    'Am I from New York?',
    'Do I have any pets?',
    'Do I like pineapple on pizza?'
];
var answers = ['y', 'n', 'y', 'y', 'y']; // Adjusted answers for case sensitivity
var userAnswers = [];
var correct = 0;
var index = 0;

// Get elements by id
var startButton = document.getElementById('start');
var quizDiv = document.getElementById('quiz');
var questionP = document.getElementById('question');
var answerInput = document.getElementById('answer');
var submitButton = document.getElementById('submit');
var resultDiv = document.getElementById('result');
var scoreP = document.getElementById('score');
var feedbackP = document.getElementById('feedback');
var restartButton = document.getElementById('restart');

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    userName = prompt('What is your name?');
    alert('Hello, ' + userName + '. Welcome to my webpage.');
    startButton.style.display = 'none';
    quizDiv.style.display = 'block';
    questionP.textContent = questions[index];
}

function submitAnswer() {
    var userAnswer = answerInput.value; // Removed toLowerCase for case sensitivity
    userAnswers.push(userAnswer);

    if (userAnswer === 'y' || userAnswer === 'n' || userAnswer === 'yes' || userAnswer === 'no') {
        if (userAnswer === answers[index]) {
            correct++;
            alert('You are correct!');
        } else {
            alert('Sorry, that is incorrect. The correct answer is ' + answers[index] + '.');
        }
        index++;
        answerInput.value = '';
        if (index < questions.length) {
            questionP.textContent = questions[index];
        } else {
            endQuiz();
        }
    } else {
        alert('Please enter y/n or yes/no.');
    }
}

function endQuiz() {
    quizDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    scoreP.textContent = 'You answered ' + correct + ' out of ' + questions.length + ' questions correctly.';
    feedbackP.textContent = 'Thank you for taking the quiz, ' + userName + '. I hope you learned something new about me.';
}

function restartQuiz() {
    userName = '';
    userAnswers = [];
    correct = 0;
    index = 0;
    answerInput.value = '';
    scoreP.textContent = '';
    feedbackP.textContent = '';
    resultDiv.style.display = 'none';
    startButton.style.display = 'block';
}

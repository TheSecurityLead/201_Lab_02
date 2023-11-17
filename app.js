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

// Functions (startQuiz, submitAnswer, endQuiz, restartQuiz)

// Place all your JavaScript functions here


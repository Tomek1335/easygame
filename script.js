let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
let timeLeft = 30;
let timer;
let gameStarted = false;

const squares = document.getElementById('game');
const timerDisplay = document.querySelector('.timer');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

function countdown() {
	timeLeft--;
	timerDisplay.textContent = timeLeft;

	if (timeLeft === 0) {
		clearInterval(timer);
		gameStarted = false;
		alert('Koniec gry! Twój wynik

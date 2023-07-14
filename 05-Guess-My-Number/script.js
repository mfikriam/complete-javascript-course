'use strict';

//************** VARIABLES **************/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//************** FUNCTIONS **************/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//************** CHECK EVENT LISTENERS **************/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // ? When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // ? When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // ? When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//************** AGAIN EVENT LISTENERS **************/
document.querySelector('.again').addEventListener('click', function () {
  // ? Restore initial values of the score and secret number variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // ? Restore initial conditions of the message, number, score, and guess input field
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // ? Restore the original background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

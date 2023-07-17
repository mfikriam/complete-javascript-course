'use strict';

//************** SELECTING ELEMENTS **************/
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//************** DECLARING VARIABLES **************/
let scores, currentScore, activePlayer, playing;

//************** STARTING CONDITIONS **************/
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');

  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};

init();

//************** FUNCTIONS **************/
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

//************** ROLLING DICE FUNCTIONALITY **************/
btnRoll.addEventListener('click', function () {
  if (playing) {
    // ? 1. Generationg a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // ? 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // ? 3. Check for rolled 1
    if (dice !== 1) {
      // ? Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // ? Switch to next player
      switchPlayer();
    }
  }
});

//************** HOLD FUNCTIONALITY **************/
btnHold.addEventListener('click', function () {
  if (playing) {
    // ? 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // ? 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // ? Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // ? Switch to the next player
      switchPlayer();
    }
  }
});

//************** NEW GAME FUNCTIONALITY **************/
btnNew.addEventListener('click', init);

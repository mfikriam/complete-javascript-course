'use strict';

//************** SELECTING ELEMENTS **************/
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//************** STARTING CONDITIONS **************/
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//************** FUNCTIONS **************/

//************** EVENT LISTENERS **************/

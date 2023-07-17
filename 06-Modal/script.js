'use strict';

//************** VARIABLES **************/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

//************** FUNCTIONS **************/
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//************** BUTTONS SHOW MODAL EVENT LISTENERS **************/
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

//************** CLOSE MODAL EVENT LISTENERS **************/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

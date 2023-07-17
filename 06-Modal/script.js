'use strict';

//************** VARIABLES **************/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

//************** FUNCTIONS **************/
const openModal = function () {
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

// ? Escape Key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

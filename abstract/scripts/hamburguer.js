const button = document.querySelector('#menu');
const buttons = document.querySelector('#buttons-container');
const searchbutton = document.querySelector('#input-button');

button.addEventListener('click', () => {
  buttons.classList.toggle('open');
  button.classList.toggle('active');
})

searchbutton.addEventListener('click', () => {
  searchbutton.classList.toggle('active');
})
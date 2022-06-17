//funcao para abrir frase
function openFrase() {
  document.body.classList.add('frases-expanded')
}

//function fechar frase
function closeFrase() {
  document.body.classList.remove('frases-expanded')
}

//funttion abrir new-task
function openNewTask() {
  document.body.classList.add('new-task-expanded')
}

//funttion fechar new-task
function closeNewTask() {
  document.body.classList.remove('new-task-expanded')
}

//CAROUSEL FUNCTIONS

const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelectorAll('[data-js="carousel__button--next"]')

let currentSlideIndex = 0

function nextSlide() {
  const slides = document.querySelectorAll('[data-js="carousel__item"]')
  if (currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0
  } else {
    currentSlideIndex++
  }
  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })
  slides[currentSlideIndex].classList.add('carousel__item--visible')
}


for (let i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener('click',nextSlide)
}

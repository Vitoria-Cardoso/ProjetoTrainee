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
  document.getElementById('modalNewTask').style.display = 'flex'
  document.body.classList.add('new-task-expanded')
}

//funttion fechar new-task
function closeNewTask() {
  document.body.classList.remove('new-task-expanded')
}

//CAROUSEL FUNCTIONS

const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelectorAll(
  '[data-js="carousel__button--next"]'
)
const prevButton = document.querySelectorAll(
  '[data-js="carousel__button--prev"]'
)

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

function prevSlide() {
  const slides = document.querySelectorAll('[data-js="carousel__item"]')
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1
  } else {
    currentSlideIndex--
  }

  console.log(currentSlideIndex)

  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })
  slides[currentSlideIndex].classList.add('carousel__item--visible')
}

for (let i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener('click', nextSlide)
}

for (let i = 0; i < prevButton.length; i++) {
  prevButton[i].addEventListener('click', prevSlide)
}

//add class visible carousel responsive
if (window.matchMedia('(min-width: 1024px)').matches) {
  const slides = document.querySelectorAll('[data-js="carousel__item"]')

  slides.forEach(slide => {
    slide.classList.add('carousel__item--visible')
  })
}
if (window.matchMedia('(max-width: 1023px)').matches) {
  const slides = document.querySelectorAll('[data-js="carousel__item"]')

  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
    slide.classList.add('.carousel__item--hidden')
  })
  slides[0].classList.add('carousel__item--visible')
}

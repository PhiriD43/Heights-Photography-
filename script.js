
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.getElementById('slides');
  const slideWidth = document.querySelector('.slider-container').offsetWidth;
  const totalSlides = slides.children.length;

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

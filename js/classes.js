// Classes Section JS
let currentSlide = 0;
const images = document.querySelectorAll('.carousel-image');
const intervalTime = 3000; 
let autoSlideInterval;

function moveSlide(direction) {
  images[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + direction + images.length) % images.length;

  images[currentSlide].classList.add('active');
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => moveSlide(1), intervalTime);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start autoplay
document.addEventListener('DOMContentLoaded', () => {
  startAutoSlide();

  // Pause autoplay when user hovers over the carousel
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
});

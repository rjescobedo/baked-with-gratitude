const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
let currentIndex = 0;
let autoSlideInterval;
const intervalTime = 3000; // Set your interval time (e.g., 3 seconds)

function moveSlide(direction) {
    // Remove 'active' class from the current image
    images[currentIndex].classList.remove('active');

    // Update currentIndex
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Add 'active' class to the new image
    images[currentIndex].classList.add('active');

    // Move carousel container to the new image position
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => moveSlide(1), intervalTime);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function setupCarouselAutoplay() {
    startAutoSlide();

    // Pause autoplay when user hovers over the carousel
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
}

function initCarousel() {
    // Set up autoplay once the page is loaded
    document.addEventListener('DOMContentLoaded', setupCarouselAutoplay);

    // Event listeners for the prev/next buttons
    document.querySelector('.carousel-button.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.carousel-button.next').addEventListener('click', () => moveSlide(1));
}

// Initialize the carousel
initCarousel();
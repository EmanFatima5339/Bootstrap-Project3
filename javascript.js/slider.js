let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

// Auto slide
setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

// Initialize the slider on page load
showSlides();

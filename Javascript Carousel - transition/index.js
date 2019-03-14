const carouselImages = document.querySelector(".carousel-images");
const slides = Array.from(carouselImages.children);
const nextButton = document.querySelector(".right-btn");
const prevButton = document.querySelector(".left-btn");

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
});

const moveToSlide = (carouselImages, currentSlide, targetSlide) => {

    carouselImages.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const hideShowArrows = (targetSlide) => {
    targetSlide.nextElementSibling ? nextButton.classList.remove('hidden') : nextButton.classList.add('hidden');
    targetSlide.previousElementSibling ? prevButton.classList.remove('hidden') : prevButton.classList.add('hidden');
}

nextButton.addEventListener("click", e => {
    const currentSlide = carouselImages.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(carouselImages, currentSlide, nextSlide);

    hideShowArrows(nextSlide);
});

prevButton.addEventListener("click", e => {
    const currentSlide = carouselImages.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(carouselImages, currentSlide, prevSlide);

    hideShowArrows(prevSlide);
})



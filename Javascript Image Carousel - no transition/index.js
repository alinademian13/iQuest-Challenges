let slideIndex = 1;
let slide = document.getElementsByClassName("slide");

slideShow(slideIndex);

function slideImg(n) {

    slideShow(slideIndex += n);
    // slide[slideIndex - 1].classList.toggle("animation");
}

function slideShow(n) {
    let i;
    if (n > slide.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slide.length;
    }
    
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
        
    }

    slide[slideIndex - 1].style.display = "block";
}
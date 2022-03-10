const PREVIOUS = document.getElementById('btn-previous');
const NEXT = document.getElementById('btn-next');
const SLIDES = document.querySelectorAll('.slide');
const DOTS = document.querySelectorAll('.dot');

let slideIndex = 0;
let interval = '';

const activeSlide = (n) => {
    for (slide of SLIDES) {
        slide.classList.remove('active');
    };

    SLIDES[n].classList.add('active');
};

const activeDot = (n) => {
    for (dot of DOTS) {
        dot.classList.remove('active');
    };

    DOTS[n].classList.add('active');
};

const nextSlide = () => {
    if (slideIndex === SLIDES.length - 1) {
        slideIndex = 0;
        prepareCurrentSlide(slideIndex);
    } else {
        slideIndex++;
        prepareCurrentSlide(slideIndex);
    };

    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
};

const previousSlide = () => {
    if (slideIndex === 0) {
        slideIndex = SLIDES.length - 1;
        prepareCurrentSlide(slideIndex);
    } else {
        slideIndex--;
        prepareCurrentSlide(slideIndex);
    };

    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
};

const prepareCurrentSlide = (slideIndex) => {
    activeSlide(slideIndex);
    activeDot(slideIndex);
};

DOTS.forEach((item, index) => {
    item.addEventListener('click', () => {
        slideIndex = index;
        prepareCurrentSlide(slideIndex);
    });
});

NEXT.addEventListener('click', nextSlide);
PREVIOUS.addEventListener('click', previousSlide);

interval = setInterval(nextSlide, 5000);


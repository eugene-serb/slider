const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;
let interval = '';

const activeSlide = (n) => {
    for (slide of slides) {
        slide.classList.remove('active');
    };

    slides[n].classList.add('active');
};

const activeDot = (n) => {
    for (dot of dots) {
        dot.classList.remove('active');
    };

    dots[n].classList.add('active');
};

const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
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
        slideIndex = slides.length - 1;
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

dots.forEach((item, index) => {
    item.addEventListener('click', () => {
        slideIndex = index;
        prepareCurrentSlide(slideIndex);
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', previousSlide);

interval = setInterval(nextSlide, 5000);


'use strict';

class Slider {
  constructor() {
    this.#configurations();
    this.#DOMs();
    this.#eventListeners();

    this.slideIndex = 0;
    this.interval = 0;

    this.start();
  };

  start = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.nextSlide, this.SPEED_RATE);
  };

  #nextSlide = () => {
    if (this.slideIndex === this.$SLIDES.length - 1) {
      this.slideIndex = 0;
      this.#prepareCurrentSlide(this.slideIndex);
    } else {
      this.slideIndex++;
      this.#prepareCurrentSlide(this.slideIndex);
    };
    this.start();
  };

  #previousSlide = () => {
    if (this.slideIndex === 0) {
      this.slideIndex = this.$SLIDES.length - 1;
      this.#prepareCurrentSlide(this.slideIndex);
    } else {
      this.slideIndex--;
      this.#prepareCurrentSlide(this.slideIndex);
    };
    this.start();
  };

  #prepareCurrentSlide = (slideIndex) => {
    this.#activeSlide(slideIndex);
    this.#activeDot(slideIndex);
  };

  #activeSlide = (n) => {
    this.$SLIDES.forEach((item) => {
      item.classList.remove('active');
    });
    this.$SLIDES[n].classList.add('active');
  };

  #activeDot = (n) => {
    this.$DOTS.forEach((item) => {
      item.classList.remove('active');
    });
    this.$DOTS[n].classList.add('active');
  };

  #configurations = () => {
    this.SPEED_RATE = 5000;
  };

  #DOMs = () => {
    this.$PREVIOUS = document.getElementById('btn-previous');
    this.$NEXT = document.getElementById('btn-next');
    this.$SLIDES = document.querySelectorAll('.slide');
    this.$DOTS = document.querySelectorAll('.dot');
  };

  #eventListeners = () => {
    this.$PREVIOUS.addEventListener('click', () => this.#previousSlide());
    this.$NEXT.addEventListener('click', () => this.#nextSlide());
    this.$DOTS.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.slideIndex = index;
        this.#prepareCurrentSlide(this.slideIndex);
      });
    });
  };
};

const SLIDER = new Slider();

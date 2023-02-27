import Swiper from 'swiper/bundle';

export const slider = () => {
  const swiper = new Swiper('.top-slider__container', {
    loop: true,
    speed: 1000,
    effect: 'fade',

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    fadeEffect: {
      crossFade: true
    },

    pagination: {
      el: ".top-slider__pagination",
      clickable: true,
    },

  });
};
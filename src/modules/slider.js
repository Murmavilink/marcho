import Swiper from 'swiper/bundle';

export const slider = () => {
    
    const topSlider = new Swiper('.top-slider__container', {
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


    const logSlider = new Swiper('.partners__list-wrap', {
      slidesPerView: 1,
      loop: true,      
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        425: {
          slidesPerView: 2,
        },      
        
        768: {
          slidesPerView: 3,
        }  
      }
  
    });


    

};
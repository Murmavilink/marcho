import Swiper from 'swiper/bundle';

export const slider = () => {
  const link = document.getElementById('main-page');

  const startSlider = () => {
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

  
  try {
    
    if(!link) throw new Error('Верните идентификатор на место, пожалуйста!');
    
    link.addEventListener('click', () => setTimeout(startSlider, 500));

  } catch (error) {
    console.log(error.message);
  }
    

  startSlider();
};
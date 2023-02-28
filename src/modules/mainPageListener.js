import { slider } from "./slider";
import { lightbox } from './lightbox';
import { render } from "./render";

export const mainPageListener = () => {
  const links = document.querySelectorAll('.menu__list-link');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const pageName = e.target.getAttribute('href');

      if(!pageName) return;

      if (pageName == 'index.html') {
        setTimeout(() => {
            slider();
            lightbox();
            render('main', 6, '.product__items');
        }, 500);
      } else if(pageName == 'shop.html') {
        setTimeout(() => {
          render('shop', 10, '.shop-content__inner');
        }, 500);
      }

    });
  });
};
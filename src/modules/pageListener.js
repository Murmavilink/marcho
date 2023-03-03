import Swup from 'swup';

import { menu } from './menu';
import { slider } from "./slider";
import { lightbox } from './lightbox';
import { render } from "./render";
import { viewGoods } from "./filter";
import { smoothScroll } from './smoothScroll';
import { timer } from './timer';
import { search } from './filter';
import { pagination } from './pagination';



export const pageListener = () => {
  const swup = new Swup();

  swup.on('contentReplaced', () => {

    if(window.location.pathname === '/index.html') {
        slider();
        lightbox();
        render({
            display: 'main', 
            stack: 6, 
            selectorWrap: '.product__items'
        });
        menu(true);
        smoothScroll();
        timer();
    } else if(window.location.pathname === '/shop.html') {
        viewGoods();
        render({
            display: 'shop', 
            stack: 10, 
            selectorWrap: '.shop-content__inner'
        });
        menu(true);
        search();
        pagination();
    } else {
      location.reload();
    }

  });
};
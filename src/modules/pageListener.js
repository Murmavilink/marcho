import Swup from 'swup';

import { menu } from './menu';
import { slider } from "./slider";
import { lightbox } from './lightbox';
import { render } from "./render";
import { viewGoods } from './viewGoods';
import { smoothScroll } from './smoothScroll';
import { timer } from './timer';
import { search } from './filter';
import { pagination } from './pagination';
import { price } from './filter';


export const pageListener = () => {
  const swup = new Swup();

  swup.on('contentReplaced', () => {

    if(window.location.pathname === '/index.html') {
        menu(true);  
        slider();
        lightbox();
        render({display: 'main', stack: 6, selectorWrap: '.product__items'});
        smoothScroll();
        timer();
    } else if(window.location.pathname === '/shop.html') {
        render({display: 'shop', stack: 10, selectorWrap: '.shop-content__inner'});
        menu(true);
        viewGoods();
        search();
        pagination();
        price();
    } else {
      location.reload();
    }

  });
};
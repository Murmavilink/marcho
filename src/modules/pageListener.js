import Swup from 'swup';

import { menu } from './menu';
import { slider } from "./slider";
import { lightbox } from './lightbox';
import { render } from "./render";
import { viewGoods } from './viewGoods';
import { smoothScroll } from './smoothScroll';
import { timer } from './timer';
import { pagination } from './pagination';
import { filter } from "./filter";
import { renderFilter } from "./renderFilter";
import { productClick } from './additionalFunctions';
import { product } from './product';
import { auth } from './auth';
import { sendForm } from './sendForm';
import { basket } from './basket';
import { modalProduct } from './modalProduct';


export const pageListener = () => {
  const swup = new Swup();

  swup.on('contentReplaced', () => {

    if (window.location.pathname === '/index.html') {
      menu(true);
      slider();
      lightbox();
      render({ display: 'main', stack: 6, selectorWrap: '.product__items' });
      smoothScroll();
      timer();
      productClick('.product__items');
      auth();
      basket('.product__items');
    } else if (window.location.pathname === '/shop.html') {
      render({ display: 'shop', stack: 10, selectorWrap: '.shop-content__inner' });
      menu(true);
      viewGoods();
      pagination();
      filter();
      renderFilter();
      productClick('.shop-content__inner');
      auth();
      basket('.shop-content__inner');
    } else if (window.location.pathname === '/contacts.html') {
      sendForm({ idForm: 'contact-form' });
      auth();
    } else if (window.location.pathname === '/product.html') {
      sendForm({ idForm: 'product-form', idProductСount: 'product-count' });
      product();
      auth();
      modalProduct();
      basket();
    }

  });
};
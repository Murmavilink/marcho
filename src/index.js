import { slider } from "./modules/slider";
import { lightbox } from "./modules/lightbox";
import { render } from "./modules/render";
import { smoothScroll } from "./modules/smoothScroll";
import { timer } from "./modules/timer";
import { productClick } from './modules/helpers';


slider();
lightbox(80, 80);
render({
    display: 'main', 
    stack: 6, 
    selectorWrap: '.product__items'
});
smoothScroll();
timer();
productClick('.product__items');
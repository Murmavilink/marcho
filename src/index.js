import { slider } from "./modules/slider";
import { lightbox } from "./modules/lightbox";
import { render } from "./modules/render";


slider();
lightbox(80, 80);
render({
    display: 'main', 
    stack: 6, 
    selectorWrap: '.product__items'
});

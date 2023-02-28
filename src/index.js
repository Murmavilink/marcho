import { slider } from "./modules/slider";
import { lightbox } from "./modules/lightbox";
import { render } from "./modules/render";


slider();
lightbox(80, 80);
render('main', 6, '.product__items');
import { render } from "./modules/render";
import { viewGoods } from "./modules/viewGoods";
import { search } from "./modules/filter";
import { pagination } from './modules/pagination';
import { price } from "./modules/filter";


render({
    display: 'shop', 
    stack: 10, 
    selectorWrap: '.shop-content__inner'
});
viewGoods();
search();
pagination();
price();
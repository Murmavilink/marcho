import { render } from "./modules/render";
import { viewGoods } from "./modules/viewGoods";
import { pagination } from './modules/pagination';
import { filter } from "./modules/filter";


render({
    display: 'shop', 
    stack: 10, 
    selectorWrap: '.shop-content__inner'
});
viewGoods();
pagination();
filter();
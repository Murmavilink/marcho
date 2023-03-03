import { viewGoods } from "./modules/filter";
import { render } from "./modules/render";
import { search } from "./modules/filter";
import { pagination } from './modules/pagination';

viewGoods();
render({
    display: 'shop', 
    stack: 10, 
    selectorWrap: '.shop-content__inner'
});
search();
pagination();
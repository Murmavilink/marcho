import { viewGoods } from "./modules/filter";
import { render } from "./modules/render";
import { search } from "./modules/filter";

viewGoods();
render({
    display: 'shop', 
    stack: 10, 
    selectorWrap: '.shop-content__inner'
});
search();
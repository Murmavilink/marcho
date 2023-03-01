import { viewGoods } from "./modules/filter";
import { render } from "./modules/render";


viewGoods();
render({
    display: 'shop', 
    stack: 10, 
    selectorWrap: '.shop-content__inner'
});
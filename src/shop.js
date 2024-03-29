import { render } from "./modules/render";
import { viewGoods } from "./modules/viewGoods";
import { pagination } from './modules/pagination';
import { filter } from "./modules/filter";
import { renderFilter } from "./modules/renderFilter";
import { productClick } from './modules/additionalFunctions';
import { basket } from "./modules/basket";

render({
    display: 'shop',
    stack: 10,
    selectorWrap: '.shop-content__inner'
});
viewGoods();
pagination();
filter();
renderFilter();
productClick('.shop-content__inner');
basket('.shop-content__inner');
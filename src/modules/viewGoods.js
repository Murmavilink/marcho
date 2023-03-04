import { render } from "./render";

export const viewGoods = () => {
    const buttonGrid = document.querySelector('.button-grid');
    const buttonList = document.querySelector('.button-list');


    const handlerView = (view) => {
        buttonGrid.classList.toggle('shop-content__filter-btn--active');
        buttonList.classList.toggle('shop-content__filter-btn--active');
        render({
            selectorWrap: '.shop-content__inner',
            productView: view
        });
    };


    const disabledBtn = (param1, param2) => {
        buttonGrid.disabled = param1;
        buttonList.disabled = param2;
    };


    buttonGrid.addEventListener('click', () => {
        handlerView('product-item--grid');
        disabledBtn(true, false);
    });

    buttonList.addEventListener('click', () => {
        handlerView('product-item--list');
        disabledBtn(false, true);
    });
};

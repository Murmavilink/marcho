import { render } from "./render";

export const viewGoods = () => {
    const buttonGrid = document.querySelector('.button-grid');
    const buttonList = document.querySelector('.button-list');

    const handlerView = (view) => {
        buttonGrid.classList.toggle('shop-content__filter-btn--active');
        buttonList.classList.toggle('shop-content__filter-btn--active');
        render({
            productView: view
        });
    };

    buttonGrid.addEventListener('click', () => {
        handlerView('product-item--grid');
    });

    buttonList.addEventListener('click', () => {
        handlerView('product-item--list');
    });

};
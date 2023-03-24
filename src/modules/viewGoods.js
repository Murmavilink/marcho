import { changeView } from './additionalFunctions';

export const viewGoods = (statusSwitching) => {
    const buttonGrid = document.querySelector('.button-grid');
    const buttonList = document.querySelector('.button-list');


    const handlerView = () => {
        buttonGrid.classList.toggle('shop-content__filter-btn--active');
        buttonList.classList.toggle('shop-content__filter-btn--active');

        changeView();
    };


    const disabledBtn = (param1, param2) => {
        buttonGrid.disabled = param1;
        buttonList.disabled = param2;
    };


    if (statusSwitching) {
        buttonGrid.classList.add('shop-content__filter-btn--active');
        buttonList.classList.remove('shop-content__filter-btn--active');

        disabledBtn(true, false);
    } else {
        buttonGrid.addEventListener('click', () => {
            handlerView();
            disabledBtn(true, false);
        });

        buttonList.addEventListener('click', () => {
            handlerView();
            disabledBtn(false, true);
        });
    }

};
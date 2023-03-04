import { getData } from "./getData";
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


export const search = async () => {
    const formSearch = document.querySelector('.filter-search__form');
    const formSearchBtn = document.querySelector('.filter-search__btn');
    const goods = await getData();

    formSearchBtn.disabled = true;

    formSearch.addEventListener('input', (e) => {
        let sordetData;

        sordetData = goods.filter(item => {
            const productName = item.name.toLowerCase().includes(e.target.value.toLowerCase());
            const productCat = item.category.toLowerCase().includes(e.target.value.toLowerCase());

            if (productName) return productName;
            if (productCat) return productCat;
        });

        render({ selectorWrap: '.shop-content__inner', sordetData });
    });
};
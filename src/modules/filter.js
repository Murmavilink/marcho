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

    buttonGrid.addEventListener('click', () => {
        handlerView('product-item--grid');
    });

    buttonList.addEventListener('click', () => {
        handlerView('product-item--list');
    });

};


export const search = async () => {
    const formSearch = document.querySelector('.filter-search__form');
    const goods = await getData();


    formSearch.addEventListener('input', (e) => {
        e.preventDefault();

        let sordetData;

        sordetData = goods.filter(item => {
            const productName = item.name.toLowerCase().includes(e.target.value.toLowerCase());
            const productCat = item.category.toLowerCase().includes(e.target.value.toLowerCase());

            if(productName) return productName;
            if(productCat) return productCat;
        });

        render({
            selectorWrap: '.shop-content__inner',
            sordetData,
        });
    });

    
    formSearch.addEventListener('click', (e) => {
        e.preventDefault();
    });
};
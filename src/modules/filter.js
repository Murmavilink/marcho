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


export const search = () => {
    const formSearch = document.querySelector('.filter-search__form');
    
    formSearch.addEventListener('input', (e) => {
        e.preventDefault();

        getData().then(data => {
            let sordetData;

            sordetData = data.filter(item => {
                return item.name.toLowerCase().includes(e.target.value.toLowerCase());
            });

            render({
                stack: 10,
                selectorWrap: '.shop-content__inner',
                sordetData,
            });
        });

    });

    formSearch.addEventListener('click', (e) => {
        e.preventDefault();
    });
};
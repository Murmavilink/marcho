import { getData } from "./getData";
import { render } from "./render";


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
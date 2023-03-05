import { getData } from "./getData";
import { render } from "./render";
import { viewGoods } from "./viewGoods";


export const filter = async () => {
    const goods = await getData();

    let sordetData = goods;

    const search = () => {
        const formSearch = document.querySelector('.filter-search__form');
        const formSearchBtn = document.querySelector('.filter-search__btn');

        formSearchBtn.disabled = true;

        formSearch.addEventListener('input', (e) => {
            sordetData = goods.filter(item => {
                const productName = item.name.toLowerCase().includes(e.target.value.toLowerCase());
                const productCat = item.category.toLowerCase().includes(e.target.value.toLowerCase());

                if (productName) return productName;
                if (productCat) return productCat;
            });

            viewGoods(true);
            render({ selectorWrap: '.shop-content__inner', sordetData });
        });
    };


    const price = () => {
        const formPrice = document.querySelector('.filter-price__form');
        const formPriceMin = formPrice.querySelector('#min');
        const formPriceMax = formPrice.querySelector('#max');
        const minElement = formPrice.querySelector('.filter-price__from');
        const maxElement = formPrice.querySelector('.filter-price__to');

        let minValue;
        let maxValue;


        const addZero = () => {
            if (!minElement.textContent) minElement.textContent = 0;
            if (!maxElement.textContent) maxElement.textContent = 0;
        };


        const formattingValue = (value) => {
            return value.toLocaleString("ru");
        };


        const removeSpaces = (value) => {
            return value.replace(/\s+/g, '');
        };


        formPrice.addEventListener('input', (e) => {
            e.preventDefault();

            if (e.target.id === 'min') {
                minValue = removeSpaces(e.target.value);
                minElement.textContent = formattingValue(+minValue);
            } else if (e.target.id === 'max') {
                maxValue = removeSpaces(e.target.value);
                maxElement.textContent = formattingValue(+maxValue);
            }

            if (!formPriceMin.value && !formPriceMax.value) {
                sordetData = goods;
                render({ selectorWrap: '.shop-content__inner', sordetData });
            }

            viewGoods(true);
            addZero();
        });


        formPrice.addEventListener('submit', (e) => {
            e.preventDefault();

            sordetData = sordetData.filter(item => {
                if (+removeSpaces(item.price) >= minValue && +removeSpaces(item.price) <= maxValue) return item;
            });

            if (!sordetData[0]) sordetData = goods;

            viewGoods(true);
            render({ selectorWrap: '.shop-content__inner', sordetData });
        });

    };


    search();
    price();
};





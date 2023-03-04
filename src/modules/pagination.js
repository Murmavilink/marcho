import { getData } from "./getData";
import { render } from "./render";


export const pagination = async () => {
    const paginationBlock = document.querySelector('.pagination');

    const goods = await getData();
    const countPage = Math.ceil(goods.length / 10);

    let currentPage = 1;
    let stack = 10;

    
    const viewСheck = () => {
        if(document.querySelector('.button-list').classList.contains('shop-content__filter-btn--active')) {
            render({selectorWrap: '.shop-content__inner', productView: 'product-item--list'});
        }
    };

    
    const sliceArray = (array, start, end) => {
        return array.slice(start, end);
    };


    const handlerClassItems = (index) => {
        const paginatioItems = document.querySelectorAll('.pagination__link');

        paginatioItems.forEach(item => item.classList.remove('pagination__link--active'));

        paginatioItems[index - 1].classList.add('pagination__link--active');
    };


    const displayList = (data, stackPage, pageNum) => {
        pageNum--;

        const start = stackPage * pageNum;
        const end = start + stackPage;

        const paginatedData = sliceArray(data, start, end);

        render({ selectorWrap: '.shop-content__inner', paginatedData });
        viewСheck();
    };


    const displayPaginationBtns = () => {
        const paginationWrap = document.querySelector('.pagination__list');

        for (let i = 1; i <= countPage; i++) {
            paginationWrap.insertAdjacentHTML('beforeend', `
                <li class="pagination__item">
                    <a class="pagination__link" href="#">${i}</a>
                </li>`);

            if (i === 1) document.querySelector('.pagination__link').classList.add('pagination__link--active');
        }
    };


    paginationBlock.addEventListener('click', (e) => {
        e.preventDefault();

        const element = e.target;


        if (element.classList.contains('pagination__link')) {
            displayList(goods, stack, element.textContent);

            currentPage = element.textContent;

            handlerClassItems(element.textContent);
        }

        if (element.classList.contains('pagination__next')) {
            if (currentPage < countPage) {
                displayList(goods, stack, ++currentPage);
                handlerClassItems(currentPage);
            }
        }

        if (element.classList.contains('pagination__prev')) {
            if (currentPage > 1) {
                displayList(goods, stack, --currentPage);
                handlerClassItems(currentPage);
            }
        }
    });


    displayPaginationBtns(goods);
};
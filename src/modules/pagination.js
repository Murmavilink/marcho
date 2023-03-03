import { getData } from "./getData";
import { render } from "./render";

export const pagination = async () => {
    const paginationWrap = document.querySelector('.pagination__list');

    const goods = await getData();

    let currentPage = 1;
    let stack = 10;

    
    const sliceArray = (array, start, end) => {
        return array.slice(start, end);
    };


    const displayList = (data, stackPage, pageNum) => {

        const end = parseInt(pageNum + 0);
        const start = Math.abs(stackPage - end);

        const paginatedData = sliceArray(data, start, end);
        

        render({
            selectorWrap: '.shop-content__inner',
            paginatedData
        });

    };


    const displayPaginationBtns = (data) => {
        const countPage = Math.ceil(data.length / 10);

        for (let i = 1; i <= countPage; i++) {
            paginationWrap.insertAdjacentHTML('beforeend', `
                <li class="pagination__item">
                    <a class="pagination__link" href="#">${i}</a>
                </li>`);
        }

    };



    paginationWrap.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.classList.contains('pagination__link')) {
            displayList(goods, stack, e.target.textContent.trim());
        }
        
    });


    displayPaginationBtns(goods);
};
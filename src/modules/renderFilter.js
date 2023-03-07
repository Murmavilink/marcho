import { getData } from "./getData";


export const renderFilter = async () => {
    const goods = await getData();

    const dimensions = new Set();
    const categories = new Set();
    const gender = new Set();


    goods.forEach(item => {
        if (item.size) dimensions.add(item.size);

        if (item.category) categories.add(item.category);

        if (item.gender) gender.add(item.gender);
    });


    const renderFilter = (id, data, count) => {
        const filterWrap = document.getElementById(id);

        data.forEach(item => {

            if (count > 0) {

                if (id === 'filter-size') {
                    filterWrap.insertAdjacentHTML('beforeend', `
                    <label class="filter-size__label">
                        <input class="filter-size__input" type="checkbox">
                        <span class="filter-size__checkbox"></span>
                        <span class="filter-size__text">${item}</span>
                    </label>`);
                }

                if (id === 'filter-category') {
                    filterWrap.insertAdjacentHTML('beforeend', `
                    <label class="filter-category__label">
                        <input class="filter-category__input" type="checkbox">
                        <div class="filter-category__checkbox">
                            <span>${item}</span>
                        </div>
                    </label>`);
                }

                if (id === 'filter-gender') {
                    filterWrap.insertAdjacentHTML('beforeend', `
                    <label class="filter-popular__label">
                        <input class="filter-popular__input" type="checkbox">
                        <span class="filter-popular__checkbox">
                            ${item === 'Womens' ? 'Женский': 'Мужской'}
                        </span>
                    </label> `);
                }

                count--;
            }

        });

    };


    renderFilter('filter-size', dimensions, 10);
    renderFilter('filter-category', categories, 10);
    renderFilter('filter-gender', gender, 10);
};
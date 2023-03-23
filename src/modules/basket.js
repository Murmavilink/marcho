export const basket = (selector) => {
    const goodsWrap = document.querySelector(selector);
    const cart = document.querySelector('.cart');
    const quantityGoodsBasket = document.querySelector('.user-nav__num');
    const basketSidebar = document.querySelector('.basket-sidebar');
    const basketWrap = document.querySelector('.basket-sidebar__inner');    
    const productArray = JSON.parse(localStorage.getItem('goods')) || [];


    const addToLocalStorage = () => localStorage.setItem('goods', JSON.stringify(productArray));

    const changeNumberProducts = () => quantityGoodsBasket.textContent = productArray.length;

    
    const removeProduct = (id) => {
        productArray.forEach((product, index) => {
            if(product.id == id) productArray.splice(index, 1);
        });

        addToLocalStorage();
        renderProductBasket();
        changeNumberProducts();

        if(productArray.length === 0) toggleBasketBlocks();
    };


    const renderProductBasket = () => {
        basketWrap.innerHTML = '';

        productArray.forEach(productItem => {
            basketWrap.insertAdjacentHTML('beforeend', `
            <article class="basket-sidebar__item">
                <img class="basket-sidebar__image" src="${productItem.image}">
                <h3 class="basket-sidebar__title">${productItem.title}</h3>
                <p class="basket-sidebar__price">${productItem.price}</p>
                <p class="basket-sidebar__id" style="display: none">${productItem.id}</p>
                <button type="button" class="basket-sidebar__btn button-look">Смотреть</button>
                <button type="button" class="basket-sidebar__btn button-reomve">Удалить</button>
            </article>
            `);
        });
    };


    const toggleBasketBlocks = () => {
        basketSidebar.classList.toggle('basket-sidebar--active');
        basketWrap.classList.toggle('basket-sidebar__inner--active');
    };


    const complianceCheck = (productObj) => {
        productArray.forEach((product, index) => {
            if (product.id == productObj.id) {
                productArray.splice(index, 1);
            }
        });
    };


    const handlerProduct = (productElement) => {
        const productObj = {
            id: productElement.querySelector('.product-item__id').textContent,
            title: productElement.querySelector('.product-item__title').textContent,
            image: productElement.querySelector('.product-item__images').getAttribute('src'),
            price: productElement.querySelector('.product-item__new-price').textContent,
            category: productElement.querySelector('.product-item__category').textContent,
        };

        complianceCheck(productObj);

        productArray.push(productObj);

        addToLocalStorage();
        renderProductBasket();
        changeNumberProducts();
    };


    if(goodsWrap) {
        goodsWrap.addEventListener('click', (e) => {
            if(e.target.closest('.basket-link')) {
                handlerProduct(e.target.closest('.product-item'));
            }
        });
    }
    

    cart.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(productArray.length > 0) toggleBasketBlocks(); 
    });


    basketWrap.addEventListener('click', (e) => {
        if(e.target.classList.contains('button-reomve')) {
            const id = e.target.closest('.basket-sidebar__item').querySelector('.basket-sidebar__id').textContent;

            removeProduct(id);
        } else if(e.target.classList.contains('button-look')) {
            const id = e.target.closest('.basket-sidebar__item').querySelector('.basket-sidebar__id').textContent;

            sessionStorage.setItem('idProduct', id);

            window.location.href = '/product.html';
        }
    });


    if(productArray.length > 0) renderProductBasket();

    changeNumberProducts();
};
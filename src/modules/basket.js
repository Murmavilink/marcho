export const basket = (selector) => {
    const goodsWrap = document.querySelector(selector);
    const arrayProducts = JSON.parse(localStorage.getItem('products')) || [];
    const cart = document.querySelector('.cart');
    const quantityGoodsBasket = document.querySelector('.user-nav__num');
    const basketSidebar = document.querySelector('.basket-sidebar');
    const basketWrap = document.querySelector('.basket-sidebar__inner');
    

    const addToLocalStorage = () => localStorage.setItem('products', JSON.stringify(arrayProducts));

    const changeNumberProducts = () => quantityGoodsBasket.textContent = arrayProducts.length;

    
    const removeProduct = (id) => {
        arrayProducts.forEach((product, index) => {
            if(product.id == id) arrayProducts.splice(index, 1);
        });

        addToLocalStorage();
        renderProductBasket();
        changeNumberProducts();

        if(arrayProducts.length === 0) toggleBasketBlocks();
    };


    const renderProductBasket = () => {
        basketWrap.innerHTML = '';

        arrayProducts.forEach(productItem => {
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
        arrayProducts.forEach((product, index) => {
            if (product.id == productObj.id) {
                arrayProducts.splice(index, 1);
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

        arrayProducts.push(productObj);

        addToLocalStorage();
        renderProductBasket();
        changeNumberProducts();
    };


    try {
        goodsWrap.addEventListener('click', (e) => {
            if(e.target.closest('.product-item')) {
                handlerProduct(e.target.closest('.product-item'));
            }
        });
    } catch(error) {
        console.log(error.message);
    }
    


    cart.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(arrayProducts.length > 0) toggleBasketBlocks(); 
    });


    basketWrap.addEventListener('click', (e) => {
        if(e.target.classList.contains('button-reomve')) {
            const id = e.target.closest('.basket__item').querySelector('.basket__id').textContent;

            removeProduct(id);
        } else if(e.target.classList.contains('button-look')) {
            const id = e.target.closest('.basket-sidebar__item').querySelector('.basket-sidebar__id').textContent;

            sessionStorage.setItem('idProduct', id);

            console.log(window.location);
            window.location.href = '/product.html';
        }
    });


    if(arrayProducts.length > 0) renderProductBasket();

    changeNumberProducts();
};
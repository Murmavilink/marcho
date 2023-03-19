const basketSidebar = document.querySelector('.basket-sidebar');
const basketWrap = document.querySelector('.basket-sidebar__inner');

const cart = document.querySelector('.cart');

export const basket = (selector) => {
    const goodsWrap = document.querySelector(selector);
    const arrayProducts = JSON.parse(localStorage.getItem('products')) || [];
    const quantityGoodsBasket = cart.querySelector('.user-nav__num');

    const addToLocalStorage = () => {
        localStorage.setItem('products', JSON.stringify(arrayProducts));
    };


    const productQuantityCheck = () => {
        if(arrayProducts.length === 0) {
            basketWrap.classList.toggle('basket-sidebar__inner--active');
        } else {
            basketSidebar.style.height = basketWrap.scrollHeight + 'px';
        }
    };

    
    const changeNumberProducts = () => {
        quantityGoodsBasket.textContent = arrayProducts.length;
    };


    const removeProduct = (id) => {

        arrayProducts.forEach((product, index) => {
            if(product.id == id) arrayProducts.splice(index, 1);
        });

        addToLocalStorage();
        renderProductBasket();
        changeNumberProducts();
    };


    cart.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(arrayProducts.length > 0) {
            basketWrap.classList.toggle('basket-sidebar__inner--active');
            basketSidebar.style.height = basketWrap.scrollHeight + 'px';
        }
        
    });

    // cart.querySelector('.user-nav__num').textContent = arrayProducts.length;


    basketWrap.addEventListener('click', (e) => {
        if(e.target.classList.contains('button-reomve')) {
            removeProduct(e.target.closest('.basket__item').querySelector('.basket__id').textContent);
        }
    });


    goodsWrap.addEventListener('click', (e) => {
        if(e.target.closest('.product-item')) {
            handlerProduct(e.target.closest('.product-item'));
        }
    });


    const renderProductBasket = () => {
        basketWrap.innerHTML = '';

        arrayProducts.forEach(productItem => {
            basketWrap.insertAdjacentHTML('beforeend', `
            <article class="basket__item">
                <img class="basket__image" src="${productItem.image}">
                <h3 class="basket__title">${productItem.title}</h3>
                <p class="basket__price">${productItem.price}</p>
                <p class="basket__id" style="display: none">${productItem.id}</p>
                <button type="button" class="basket__btn button-buy">Купить</button>
                <button type="button" class="basket__btn button-reomve">Удалить</button>
            </article>
            `);
        });

        productQuantityCheck();
    };



    // //////////////////////
    // const imagesProduct = document.querySelectorAll('.basket__image');


    // const photoReduction = () => {
    //     if(arrayProducts.length >= 10) {
    //         const imagesProduct = document.querySelectorAll('.basket__image');

    //         imagesProduct.forEach(image => {
    //             image.style.width = '100px';
    //         });
    //     } else {
    //         imagesProduct.forEach(image => {
    //             image.style.width = '';
    //         });
    //     }
    // };

    // //////////////////////

 


    const handlerProduct = (productElement) => {

        const productObj = {
            id: productElement.querySelector('.product-item__id').textContent,
            title: productElement.querySelector('.product-item__title').textContent,
            image: productElement.querySelector('.product-item__images').getAttribute('src'),
            price: productElement.querySelector('.product-item__new-price').textContent,
            category: productElement.querySelector('.product-item__category').textContent,
        };


        arrayProducts.forEach((product, index) => {
            if (product.id == productObj.id) {
                arrayProducts.splice(index, 1);
            }
        });



        arrayProducts.push(productObj);

        addToLocalStorage();
        renderProductBasket();
        // photoReduction();
     

        cart.querySelector('.user-nav__num').textContent = arrayProducts.length;

        basketSidebar.style.height = basketWrap.scrollHeight + 'px';


        if(basketWrap.scrollHeight > 2500) {
            basketSidebar.style.height = 2600 + 'px';
            basketSidebar.style.overflowY = 'auto';
        }



        changeNumberProducts();
    };


    if(arrayProducts.length > 0) {
        renderProductBasket();
    }

    
};


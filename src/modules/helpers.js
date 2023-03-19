export const changeView = () => {
    const goodsElements = document.querySelectorAll('.product-item');

    goodsElements.forEach(product => product.classList.toggle('product-item--list'));
};


export const productClick = (selectorWrap) => {
    const goodsWrap = document.querySelector(selectorWrap);

    goodsWrap.addEventListener('click', (e) => {
        if(e.target.closest('.product-link')) {
            const idProduct = e.target.closest('.product-item').querySelector('.product-item__id').textContent;

            sessionStorage.setItem('idProduct', idProduct);
        }
    
    });
};
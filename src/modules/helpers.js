export const changeView = () => {
    const goodsElements = document.querySelectorAll('.product-item');

    goodsElements.forEach(product => product.classList.toggle('product-item--list'));
};

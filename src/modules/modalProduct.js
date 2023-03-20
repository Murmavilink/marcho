export const modalProduct = () => {
    const buyBtn = document.querySelector('.product-one__item-btn');
    const modal = document.querySelector('.modal-product');
    const modalProductCount = document.querySelector('.modal-product__count span');
    const modalProductTitle = document.querySelector('.modal-product__form-title');

    const title = document.querySelector('.product-one__title');
    const count = document.querySelector('.product-one__item-num');

    const toggleModalClass = () => modal.classList.toggle('modal-product--active');


    buyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        modalProductTitle.textContent = title.textContent;
        modalProductCount.textContent = count.textContent;

        toggleModalClass();
    });


    modal.addEventListener('click', (e) => {
        
        if(e.target.classList.contains('modal-product__close-btn')) {
            toggleModalClass();
        } else if(!e.target.closest('.modal-product__wrap')) {
            toggleModalClass();
        }

    });

};
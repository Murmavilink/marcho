import { getData } from "./getData";


export const render = async ({ display, stack, selectorWrap, sordetData, paginatedData }) => {
    const goodsWrap = document.querySelector(selectorWrap);
    let goods;

    const renderGoods = (data) => {
        goodsWrap.innerHTML = '';

        data.forEach(item => {
            goodsWrap.insertAdjacentHTML('beforeend', `
            <div class="product-item">
                <div class="product-item__id">${item.id}</div>
                    <div class="product-item__img-box">
                    ${item.discount ? `<div class="product-item__discount">${item.discount}</div>` : ''}
                    <img class="product-item__images" src="${Array.isArray(item.images) ? item.images[0] : item.images}" alt="product">
                        <div class="product-item__link-box">    
                            <a class="product-item__link product-link" href="product.html">
                                <svg width="19px" height="20px">
                                    <path fill-rule="evenodd" fill="rgb(41, 40, 45)" d="M18.709,18.219 L14.028,13.269 C15.231,11.813 15.891,9.982 15.891,8.075 C15.891,3.622 12.328,-0.002 7.947,-0.002 C3.568,-0.002 0.005,3.622 0.005,8.075 C0.005,12.529 3.568,16.153 7.947,16.153 C9.591,16.153 11.160,15.649 12.498,14.690 L17.216,19.680 C17.414,19.890 17.678,20.004 17.964,20.004 C18.232,20.004 18.486,19.899 18.680,19.710 C19.093,19.307 19.105,18.639 18.709,18.219 L18.709,18.219 ZM7.947,2.106 C11.185,2.106 13.819,4.785 13.819,8.075 C13.819,11.367 11.185,14.046 7.947,14.046 C4.711,14.046 2.078,11.367 2.078,8.075 C2.078,4.785 4.711,2.106 7.947,2.106 L7.947,2.106 Z"></path>
                                </svg>
                            </a>
                            <a class="product-item__link basket-link" href="#">
                                <svg width="16px" height="20px">
                                    <path fill-rule="evenodd" fill="rgb(41, 40, 45)" d="M15.999,17.294 L14.854,4.396 C14.830,4.109 14.589,3.892 14.307,3.892 L11.953,3.892 C11.920,1.740 10.163,0.002 8.005,0.002 C5.847,0.002 4.090,1.740 4.057,3.892 L1.703,3.892 C1.417,3.892 1.180,4.109 1.156,4.396 L0.011,17.294 C0.011,17.311 0.007,17.327 0.007,17.343 C0.007,18.812 1.352,20.006 3.007,20.006 L13.003,20.006 C14.658,20.006 16.003,18.812 16.003,17.343 C16.003,17.327 16.003,17.311 15.999,17.294 L15.999,17.294 ZM8.005,1.106 C9.554,1.106 10.817,2.350 10.849,3.892 L5.161,3.892 C5.193,2.350 6.456,1.106 8.005,1.106 L8.005,1.106 ZM13.003,18.902 L3.007,18.902 C1.969,18.902 1.127,18.215 1.111,17.368 L2.206,5.001 L4.053,5.001 L4.053,6.678 C4.053,6.985 4.298,7.230 4.605,7.230 C4.911,7.230 5.157,6.985 5.157,6.678 L5.157,5.001 L10.849,5.001 L10.849,6.678 C10.849,6.985 11.095,7.230 11.401,7.230 C11.708,7.230 11.953,6.985 11.953,6.678 L11.953,5.001 L13.800,5.001 L14.899,17.368 C14.883,18.215 14.037,18.902 13.003,18.902 L13.003,18.902 Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="product-item__wrapper-box">
                        <div class="product-item__box">
                            <div class="product-item__category">${item.category}</div>
                            <h4 class="product-item__title">${item.name}</h4>
                            <div class="product-item__price">
                                <div class="product-item__new-price">${item.price ? item.price.trim() + ' тг' : 'unkown'}</div>
                                <div class="product-item__old-price">${item.priceOld ? item.priceOld.trim() + ' тг' : 'unkown'}</div>
                            </div>
                        </div>
                        <div class="product-item__content-box">
                            <a class="product-item__btn" href="product.html">Добавить в карзину</a>
                        </div>
                    </div>
                    </div>`);
        });
    };
    


    if (paginatedData) renderGoods(paginatedData);

    if (sordetData) renderGoods( sordetData.slice(0, stack) );


    try {
        // получаем данные  
        goods = await getData();

            
        if(!goods) {
            throw new Error('Данные не получены');
        }

        if (display === 'main' || display === 'shop') renderGoods( goods.slice(0, stack) );
    } catch(error) {
        console.log(error);
    }

};
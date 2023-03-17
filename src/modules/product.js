import Swiper from 'swiper/bundle';
import { getData } from "./getData";


export const product = async () => {
    const productTitle = document.querySelector('.product-one__title');
    const thumbsWrapper = document.querySelector('.thumbs-wrapper');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const newPrice = document.querySelector('.product-one__price-new');
    const oldPrice = document.querySelector('.product-one__price-old');
    const productDiscount = document.querySelector('.product-one__item-discount');
    const counterWrapper = document.querySelector('.product-one__counter-wrapper');
    const counterNum = document.querySelector('.product-one__item-num');
    const productId = document.getElementById('product-sku');
    const productCategory = document.getElementById('product-category');

    const goods = await getData();
    const idProduct = sessionStorage.getItem('idProduct');

    const getProduct = () => {
        let product;
    
        goods.forEach(productItem => {
            if(productItem.id == idProduct) product = productItem;
        });

        return product;
    };


    const renderProduct = (product) => {
        productTitle.textContent = product.name;
        productDiscount.textContent = product.discount;

        newPrice.textContent = product.price + 'тг';
        oldPrice.textContent = product.priceOld + 'тг';
        
        product.priceOld ? oldPrice.textContent = product.priceOld + 'тг': oldPrice.textContent = '';

        productId.textContent = product.id;
        productCategory.textContent = product.category;
    };

    const renderSlider = (product) => {
      thumbsWrapper.innerHTML = '';
      sliderWrapper.innerHTML = '';

      if (Array.isArray(product.images)) {
        product.images.forEach((image, index) => {
          if(index < 4) {
            thumbsWrapper.insertAdjacentHTML(`beforeend`, `
            <div class="swiper-slide">
              <img src="${image}"/>
            </div>`);
  
            sliderWrapper.insertAdjacentHTML(`beforeend`, `
            <div class="swiper-slide">
              <img src="${image}"/>
            </div>`);
          }
        });
      } else {
        sliderWrapper.insertAdjacentHTML(`beforeend`, `
        <div class="swiper-slide">
          <img src="${product.images}"/>
        </div>`);
      }

    };  


    const sliderProduct = () => {

      const swiper = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
  
      const swiper2 = new Swiper(".mySwiper", {
        spaceBetween: 10,
        zoom: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

    };

    const counter = () => {
      counterWrapper.addEventListener('click', (e) => {
          
        if(e.target.dataset.action === 'plus') {
          counterNum.textContent++;
        } else if(e.target.dataset.action === 'minus') {
          if(+counterNum.textContent > 1) counterNum.textContent--;
        }

      });
    };



    renderSlider(getProduct());
    renderProduct(getProduct());
    sliderProduct();
    counter();
};
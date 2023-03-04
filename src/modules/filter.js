import { getData } from "./getData";
import { render } from "./render";


const buttonGrid = document.querySelector('.button-grid');
const buttonList = document.querySelector('.button-list');


const switchingByStandard = () => {
    buttonGrid.classList.add('shop-content__filter-btn--active');
    buttonGrid.disabled = true;

    buttonList.classList.remove('shop-content__filter-btn--active');
    buttonList.disabled = false;
};



export const filter = async () => {
    const goods = await getData();
   
    let sordetData = goods;

    const search = () => {
        const formSearch = document.querySelector('.filter-search__form');
        const formSearchBtn = document.querySelector('.filter-search__btn');
        
        formSearchBtn.disabled = true;
    
        formSearch.addEventListener('input', (e) => {
            sordetData = goods.filter(item => {
                const productName = item.name.toLowerCase().includes(e.target.value.toLowerCase());
                const productCat = item.category.toLowerCase().includes(e.target.value.toLowerCase());
    
                if (productName) return productName;
                if (productCat) return productCat;
            });
    
            switchingByStandard();
            render({ selectorWrap: '.shop-content__inner', sordetData });
        });
    };


    const price = () => {
        const formPrice = document.querySelector('.filter-price__form');
        const formPriceMin = formPrice.querySelector('#min');
        const formPriceMax = formPrice.querySelector('#max');
        const minElement = formPrice.querySelector('.filter-price__from');
        const maxElement = formPrice.querySelector('.filter-price__to');
    
    
        const addZero = () => {
            if(!minElement.textContent) minElement.textContent = 0;
            if(!maxElement.textContent) maxElement.textContent = 0;
        };
    

        formPrice.addEventListener('input', (e) => {
            e.preventDefault();
    
            if (e.target.id === 'min') {
                minElement.textContent = e.target.value;
            } else if(e.target.id === 'max') {
                maxElement.textContent = e.target.value;
            }
            
            if(!formPriceMin.value  && !formPriceMax.value) {
                sordetData = goods;
                render({ selectorWrap: '.shop-content__inner', sordetData});
            }

            switchingByStandard();
            addZero();
        });

    
        formPrice.addEventListener('submit', (e) => {
           e.preventDefault();
    
           sordetData = sordetData.filter(item => {
                if(+item.price.replace(/\s+/g, '') >= +formPriceMin.value.replace(/\s+/g, '') && 
                +item.price.replace(/\s+/g, '') <= +formPriceMax.value.replace(/\s+/g, '')) return item;
           });

            if(!sordetData[0]) sordetData = goods;
            
            switchingByStandard();
            render({ selectorWrap: '.shop-content__inner', sordetData });
        });
    
    };


    search();
    price();
};





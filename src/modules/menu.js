import Swup from 'swup';

export const menu = () => {
    const links = document.querySelectorAll('.menu__list-link');
    const idLink = sessionStorage.getItem('idLink') || 0;
    const swup = new Swup();


    const removeClass = () => {
        links.forEach(link => {
            link.classList.remove('menu__list-link--active');
        });
    };


    const addClass = (index) => {
        links[index].classList.add('menu__list-link--active');
    };


    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('idLink', index);
            
            removeClass();
            addClass(sessionStorage.getItem('idLink'));
        });
    });
    

    addClass(idLink);
};

export const burgerMenu = () => {
    const burgerBtn = document.querySelector('.menu__btn');
    const menuList = document.querySelector('.menu__list');

    burgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('menu__list--active');
    });
};
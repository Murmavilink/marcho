const links = document.querySelectorAll('.menu__list-link');


export const menu = (redirect = false) => {
    const idLink = sessionStorage.getItem('idLink') || 0;

    const removeClass = () => links.forEach(link => link.classList.remove('menu__list-link--active'));

    const addClass = (index) => links[index].classList.add('menu__list-link--active');


    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('idLink', index);
            
            removeClass();
            addClass(sessionStorage.getItem('idLink'));
        });
    });
    

    addClass(idLink);

    if(redirect) {
        links.forEach((link, index) => {
            if(window.location.pathname === `/${link.getAttribute('href')}`) {
                removeClass();
                addClass(index);
            }
        });
    }
};


export const burgerMenu = () => { 
    const burgerBtn = document.querySelector('.menu__btn');
    const menuList = document.querySelector('.menu__list');

    const toggleClass = () => {
        burgerBtn.classList.toggle('menu__btn--active');
        menuList.classList.toggle('menu__list--active');
    };

    burgerBtn.addEventListener('click', toggleClass);

    if(window.innerWidth <= 860) links.forEach(link => link.addEventListener('click', toggleClass));
};
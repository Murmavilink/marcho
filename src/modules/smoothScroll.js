export const smoothScroll = () => {
    const links = document.querySelectorAll('.top-slider__link');
    

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            section.scrollIntoView({
                behavior: "smooth", 
                block: "start", 
            });

        });

    });

};
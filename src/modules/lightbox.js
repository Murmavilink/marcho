export const lightbox = (width = 80, height = 80) => {
    const videoSection = document.querySelector('.video-fashion');
    const modal = document.querySelector('.modal-fashion');
    const modalContent = modal.querySelector('.modal-fashion__content');


    if(window.innerWidth <= 425) {
        width = 90;
        height = 50;
    }


    const handlerModal = (size) => {
        size ? modalContent.style.cssText = `color: #fff; font-size: ${size}px; line-height: ${size}px; padding: 30px` : modalContent.style.cssText = '';

        document.body.classList.toggle('stop-scrolling');
        modalContent.innerHTML = '';
        modal.classList.toggle('modal--show');
    };

    
    videoSection.addEventListener('click', (e) => {
        if (e.target.closest('.video-fashion__play') || e.target.closest('.video-fashion__link')) {
            e.preventDefault();
            const path = e.target.closest('a').getAttribute('href');

            try {
                if (!path.includes('https://www.youtube.com/embed')) {
                    throw new Error('Пожалуйста скопируете ссылку на видео через iframe!');
                }
            } catch (error) {
                handlerModal(30);
                return modalContent.insertAdjacentHTML('beforeend', `${error.message}`);
            }

            handlerModal();
            
            modalContent.insertAdjacentHTML('beforeend', 
            `<iframe width="${width}%" height="${height}%" src="${path}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

        } else if (e.target.closest('.modal-fashion__close') || (modal.classList.contains('modal--show') && !e.target.closest('iframe'))) {
            handlerModal();
        } 
    });


};
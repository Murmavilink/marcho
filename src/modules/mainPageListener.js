import { slider } from "./slider";
import { lightbox } from './lightbox';


export const mainPageListener = () => {
    const link = document.getElementById('main-page');

    try {
    
        if(!link) throw new Error('Верните идентификатор на место, пожалуйста!');
        
        link.addEventListener('click', () => {

            setTimeout(() => {
                slider();
                lightbox();
            }, 500);
            
        });
    
      } catch (error) {
        console.log(error.message);
      }
};
import { validate } from "./validate";
import { inputСheck } from "./validate";
import { maskPhone } from "./validate";

export const sendForm = ({idForm, idProductСount}) => {
    const form = document.getElementById(idForm);
    const formElements = form.querySelectorAll('.entry-field');
    const statusBlock = document.createElement('h3');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const succesText = 'Спасибо! Наш менеджер с вами свяжется';


    const clearStatusBlock = () => {
        setTimeout(() => {
            statusBlock.textContent = '';
        }, 5000);
    };


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };


    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        form.append(statusBlock);
        statusBlock.textContent = loadText;
        
        formData.forEach((val, key) => formBody[key] = val);
    
        if(idProductСount) formBody.quantity = document.getElementById(idProductСount).textContent;
        
        sendData(formBody).then(data => {
            statusBlock.textContent = succesText;

            formElements.forEach(element => element.value = '');

            clearStatusBlock();
        }).catch(error => {
            statusBlock.textContent = errorText;

            clearStatusBlock();
        });
    };


    try {
        if(!form) {
            throw new Error('Верните форму на место, пожааааалуйста))');
        }

        form.addEventListener('input', () => {
            validate(formElements);
            inputСheck();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            if(validate(formElements)) submitForm();
        });

        form.append(statusBlock);
    } catch(error) {
        console.log(error.message);
    }
   
    maskPhone('.form-phone');
};

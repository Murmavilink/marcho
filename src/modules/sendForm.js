export const sendForm = () => {
    const form = document.querySelector('.contact__form');
    const textarea = form.querySelector('textarea');
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
        const formElements = [...form.querySelectorAll('input'), textarea];
        const formData = new FormData(form);
        const formBody = {};

        form.append(statusBlock);
        statusBlock.textContent = loadText;
        
        formData.forEach((val, key) => formBody[key] = val);

        formBody['textarea'] = textarea.value;


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

        form.append(statusBlock);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            submitForm();
        });
    } catch(error) {
        console.log(error.message);
    }
   
};
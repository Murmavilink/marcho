export const auth = () => {
    const buttonAuth = document.querySelector('.auth-btn');
    const buttonOut = document.querySelector('.auth-out');

    const modalAuth = document.querySelector('.modal-auth');
    const modalContentAuth = modalAuth.querySelector('.modal-auth__wrap');
    const modalAuthForm = modalAuth.querySelector('.modal-auth__form');
    const modalAuthLogin = modalAuth.querySelector('.modal-auth__login');
    const modalAuthPassword = modalAuth.querySelector('.modal-auth__password');

    const authUsername = document.querySelector('.auth-username');
    const authOut = document.querySelector('.auth-out');


    const removeModal = () => {
        modalAuth.style.top = '-300%';
        modalContentAuth.style.top = '-300%';
    };


    const login = (user) => {
        authUsername.style.display = 'block';
        authOut.style.display = 'block';
        buttonAuth.style.display = 'none';

        authUsername.textContent = user.login;
    };


    const logout = () => {
        authUsername.style.display = 'none';
        authOut.style.display = 'none';
        buttonAuth.style.display = 'block';

        modalAuthLogin.value = '';
        modalAuthPassword.value = '';

        localStorage.removeItem('auth');
    };


    buttonAuth.addEventListener('click', () => {
        modalAuth.style.top = '0px';      
        modalContentAuth.style.top = '50%';      
    });
    

    buttonOut.addEventListener('click', logout);
    

    modalAuth.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-auth__close-btn')) {
            removeModal();
        } else if(!e.target.closest('.modal-auth__wrap')) {
            removeModal();
        }
    });

    
    modalAuthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = {
            login: modalAuthLogin.value,
            password: modalAuthPassword.value
        };

        if(!modalAuthLogin.value.trim()) {
            alert('Введите логин!');
        } else if(!modalAuthPassword.value.trim()) {
            alert('Введите пароль!');   
        } else {
            localStorage.setItem('auth', JSON.stringify(user));

            login(user);
            removeModal();
        }
    });

    
    modalAuthForm.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\s+/g, '');

        e.target.value = e.target.value.substring(0, 10);
    });


    if(localStorage.getItem('auth')) {
        login(JSON.parse(localStorage.getItem('auth')));
    }

};
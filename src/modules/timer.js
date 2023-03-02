export const timer = (deadline) => {
    const timerDays = document.querySelector('.promo__days');
    const timerHours = document.querySelector('.promo__hours');
    const timerMinutes = document.querySelector('.promo__minutes');
    const timerSeconds = document.querySelector('.promo__seconds');
    
    let idInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
    
        return { timeRemaining, days, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        const fDays = getTime.days < 10 ? '0' + getTime.days : getTime.days;
        const fHours = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        const fMinutes = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
        const fSeconds = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;

        timerDays.textContent = fDays;
        timerHours.textContent = fHours;
        timerMinutes.textContent = fMinutes;
        timerSeconds.textContent = fSeconds;

        if(getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
                
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    };

    idInterval = setInterval(updateClock, 1000);
};
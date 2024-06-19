const newYearBlock = document.querySelector('.new-year-block');
console.log(newYearBlock);

const newYearTimer = () => {
    const newYear = new Date('01/01/2025').getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = newYear - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            newYearBlock.innerHTML = 'Happy New Year!';
            return;
        }

        const nowDate = new Date();
        const newYearDate = new Date(newYear);
        const remainingDate = new Date(timeRemaining);

        let months = newYearDate.getMonth() - nowDate.getMonth();
        let days = newYearDate.getDate() - nowDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(newYearDate.getFullYear(), newYearDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            months += 12;
        }

        const hours = remainingDate.getUTCHours();
        const minutes = remainingDate.getUTCMinutes();
        const seconds = remainingDate.getUTCSeconds();

        newYearBlock.innerHTML = `${months}м ${days}д ${hours}ч ${minutes}м ${seconds}с`;
    }, 1000);
}

newYearTimer();
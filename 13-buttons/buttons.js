const buttonsBlock = document.querySelector('.buttons-block');
const allButtons = buttonsBlock.querySelectorAll('.button');
const points = document.querySelector('.points-block');

buttonsBlock.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'BUTTON') {
        allButtons.forEach(btn => btn.textContent = 'Нажми меня');
        evt.target.textContent = 'Нажата';

        points.textContent ? points.textContent++ : 1;
    }
});

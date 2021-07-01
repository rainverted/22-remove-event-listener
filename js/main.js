const countDOM = document.querySelector('.count');
const enableDOM = document.querySelector('#enable');
const addDOM = document.querySelector('#add');
const disableDOM = document.querySelector('#disable');

let clickCount = 0;

countDOM.innerText = clickCount;

function pridetiViena() {
    countDOM.innerText = ++clickCount;
}

enableDOM.addEventListener('click', () => {
    addDOM.addEventListener('click', pridetiViena);
})

disableDOM.addEventListener('click', () => {
    addDOM.removeEventListener('click', pridetiViena);
})

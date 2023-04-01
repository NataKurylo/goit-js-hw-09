const bodyEl = document.body;
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

let timerId = null;

btnStartEl.addEventListener('click', onChangeColor);
btnStopEl.addEventListener('click', offChangeColor);

function onChangeColor() {
    btnStartEl.setAttribute('disabled', '');
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`
    timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    btnStopEl.toggleAttribute('disabled', '');
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function offChangeColor() {
    clearInterval(timerId);
    btnStartEl.toggleAttribute('disabled', '');
    btnStopEl.setAttribute('disabled', '');
}
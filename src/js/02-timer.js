// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStartEl = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
btnStartEl.disabled = true;
let ms;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    if (selectedDates[0] - new Date() > 0) {
        btnStartEl.disabled = false;
    } else {
        Notiflix.Notify.failure("Please choose a date in the future");
    }
  },
};
const fp = flatpickr(inputEl, options);

btnStartEl.addEventListener('click', handleClick);
function handleClick() {
    ms = fp.selectedDates[0] - new Date();
    if (ms > 0) {
        const elemnetsOfTimer = convertMs(ms);
        daysEl.textContent = addLeadingZero(elemnetsOfTimer.days);
        hoursEl.textContent = addLeadingZero(elemnetsOfTimer.hours);
        minutesEl.textContent = addLeadingZero(elemnetsOfTimer.minutes);
        secondsEl.textContent = addLeadingZero(elemnetsOfTimer.seconds);
        setInterval(handleClick, 1000);
    } return ;
}

function addLeadingZero(value) {
    let newValue = String(value);
    if (newValue.length < 2) {
        newValue = 0 + newValue;
    } return newValue;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


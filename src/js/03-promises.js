import Notiflix from 'notiflix';

const formEl = document.querySelector('form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', handleCreatePromise);
function handleCreatePromise(event) {
  event.preventDefault();
  let position = 1;
  let delay = Number(delayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);

  for (let i = 1; i <= amount; i += 1) {
    function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
          if (shouldResolve) {
            resolve({ position, delay });
          }
          else {
            reject({ position, delay });
          }
        }, delay);
      });
    }
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    })
    position += 1;
    delay = delay + step;
    }
  }

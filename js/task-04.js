let counterValue = 0;

const spanValue = document.querySelector('span')
spanValue.textContent = counterValue;

const buttonDecr = document.querySelector('button[data-action="decrement"]')

const buttonIncr = document.querySelector('button[data-action="increment"]')

const clickDecr = () => {
    counterValue = counterValue - 1;
    spanValue.textContent = counterValue;
}

const clickIncr = () => {
    counterValue = counterValue + 1;
    spanValue.textContent = counterValue;
}

buttonDecr.addEventListener('click', clickDecr)
buttonIncr.addEventListener('click', clickIncr)
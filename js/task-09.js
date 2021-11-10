function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector('.change-color')
const colorNameEl = document.querySelector('.color')
const background = document.querySelector('.widget')

function changeColor () {
  background.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
}

changeColorEl.addEventListener('click', changeColor)

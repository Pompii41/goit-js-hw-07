const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const value = document.querySelector("#value");
function decrementValue() {
  value.textContent -= 1;
}

function incrementValue() {
  value.textContent = Number(value.textContent) + 1;
}

buttonDecrement.addEventListener("click", decrementValue);
buttonIncrement.addEventListener("click", incrementValue);

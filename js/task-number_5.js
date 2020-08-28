const inputRef = document.querySelector("#name-input");
const titleRef = document.querySelector("#name-output");
function inputName(event) {
  titleRef.textContent = event.target.value
    ? event.target.value
    : (titleRef.textContent = "незнакомец");
}
inputRef.addEventListener("input", inputName);

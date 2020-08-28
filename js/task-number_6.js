const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  input.value.length >= input.dataset.length
    ? input.classList.remove("invalid") || input.classList.add("valid")
    : input.classList.add("invalid");
});

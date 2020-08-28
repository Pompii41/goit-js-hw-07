const inputRef = document.querySelector("#font-size-control");
const str = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
  str.style.fontSize = `${event.target.value}px`;
});

const fontSizeControl = document.querySelector("#font-size-control");
const str = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  let total = event.target.value;
  str.style.fontSize = `${total}px`;
});

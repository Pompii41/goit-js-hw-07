const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
ingredients.forEach((item) => {
  const li = document.createElement("li");
  const text = document.createTextNode(item);
  li.appendChild(text);
  const conteinerRef = document;
  z.getElementById("ingredients").appendChild(li);
  return conteinerRef;
});

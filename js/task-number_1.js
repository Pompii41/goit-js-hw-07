const itemRef = document.querySelectorAll(`.item`);
console.log(`Категории:${itemRef.length}`);
const catigoriesTotal = itemRef.forEach((titleRef) =>
  console.log(`Категории:${titleRef.querySelector(`h2`).textContent}
  Количество элементов:${titleRef.querySelectorAll(`li`).length}`)
);

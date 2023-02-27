const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markup = [];
ingredients.forEach(function callback(element) {
  const createTag = document.createElement("li");
  createTag.textContent = element;
  createTag.classList.add("item");
  markup.push(createTag);
});

const list = document.querySelector("#ingredients");
list.append(...markup);

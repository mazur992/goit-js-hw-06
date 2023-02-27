const categoriesEls = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEls.length);

categoriesEls.forEach(function callback(element) {
  console.log("");
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.childElementCount);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divControlsEl = document.querySelector("#controls");
const inputNumberEl = divControlsEl.firstElementChild;
const btnCreateEl = inputNumberEl.nextElementSibling;
const btnDestroyEl = btnCreateEl.nextElementSibling;
const divBoxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => createBoxes());
btnDestroyEl.addEventListener("click", () => {
  btnCreateEl.removeEventListener("click", createBoxes);
  destroyBoxes();
});

function createBoxes() {
  if (inputNumberEl.value <= 0 || inputNumberEl.value > 100) {
    alert("Помилка! Введіть число від 1 до 100");
  } else {
    let newArray = [];
    let widthDiv = 30;
    let heightDiv = 30;
    for (let i = 0; i < inputNumberEl.value; i += 1) {
      let newRefTag = document.createElement("div");
      newRefTag.style.background = getRandomHexColor();
      newRefTag.style.width = `${widthDiv}px`;
      newRefTag.style.height = `${heightDiv}px`;

      newArray.push(newRefTag);

      widthDiv += 10;
      heightDiv += 10;
    }
    divBoxesEl.prepend(...newArray);
  }
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}

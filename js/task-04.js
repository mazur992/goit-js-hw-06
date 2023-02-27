let counterValue = 0;

const addCounter = document.querySelector('[data-action="increment"');
const removeCounter = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");

addCounter.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

removeCounter.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

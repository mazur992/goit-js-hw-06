const inputEl = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  console.log(event.target.value);
  spanEL.style.fontSize = `${event.target.value}px`;
});

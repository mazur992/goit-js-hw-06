const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (event) => {
  textOutputEl.textContent = event.currentTarget.value;
});
textInputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    textOutputEl.textContent = "Anonymous";
  }
});

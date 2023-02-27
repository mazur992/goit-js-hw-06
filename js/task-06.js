const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("change", () => {
  inputEl.addEventListener("blur", (event) =>
    event.target.value.length === Number(event.target.dataset.length)
      ? event.target.classList.add("valid")
      : event.target.classList.add("invalid")
  );
});
inputEl.addEventListener("focus", (event) => {
  event.target.classList.remove("valid");
  event.target.classList.remove("invalid");
});

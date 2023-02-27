// const form = document.querySelector(".login-form");

// const user = {};

// form.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const formDate = new FormData(event.target);

//   formDate.forEach((value, name) => {
//     user[name] = value;

//     if (value === "") {
//       console.log(
//         alert(
//           "Не всі поля заповнені! Будь-ласка заповніть поля і повторіть відправлення форми!"
//         )
//       );
//     }
//   });
//   console.log(user);

//   event.target.reset();
// }

// ----------------------------------------------------------

const form = document.querySelector(".login-form");

const user = {};

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  user.email = email.value;
  user.password = password.value;

  if (email.value === "" || password.value === "") {
    console.log(
      alert(
        "Не всі поля заповнені! Будь-ласка заповніть поля і повторіть відправлення форми!"
      )
    );
  }
  console.log(user);

  event.target.reset();
}

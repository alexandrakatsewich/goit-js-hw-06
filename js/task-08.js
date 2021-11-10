const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const formResult = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    formResult[name] = value;
  })
  console.log(formResult)

}
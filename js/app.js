// variables name
const inputEmail = document.querySelector("#email");
const errorText = document.querySelector(".error-text");
const btnNotify = document.querySelector(".notify");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeout = setInterval(() => {
  inputEmail.style.borderColor = "hsl(223, 100%, 88%)";
  errorText.classList.add("hidden");
}, 3000);

btnNotify.addEventListener("click", function () {
  if (inputEmail.value.length === 0) {
    inputEmail.style.borderColor = "hsl(354, 100%, 66%)";
    errorText.classList.remove("hidden");
    errorText.textContent = "Please input your email address";
  } else if (!inputEmail.value.match(emailValidation)) {
    inputEmail.style.borderColor = "hsl(354, 100%, 66%)";
    errorText.classList.remove("hidden");
    errorText.textContent = "Please provide a valid email address";
  } else {
    // valid email
    inputEmail.style.borderColor = "hsl(223, 100%, 88%)";
    errorText.classList.add("hidden");
  }
  return timeout;
});

const form = document.getElementById("form");
const error = document.getElementById("error");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = () =>
  form.value.match(mailformat) ? console.log("ok") : emailError();

const emailError = () => {
  error.style.display = "block";
  form.style.borderColor = "hsl(354, 100%, 66%)";
};

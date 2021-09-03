const form = document.getElementById("form");
const error = document.getElementById("error");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = () =>
  form.value.match(mailformat) ? success() : emailError();

const emailError = () => {
  error.style.display = "block";
  form.style.borderColor = "hsl(354, 100%, 66%)";
};

const success = () => {
  error.style.display = "none";
  form.style.borderColor = "hsl(223, 87%, 63%)";
};

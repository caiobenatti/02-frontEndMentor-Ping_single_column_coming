const form = document.getElementById("form");
const button = document.getElementById("click");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = () => form.matches(mailformat) ? console.log('ok') : 

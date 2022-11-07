const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const successMsg = document.querySelector("#success");

function checkLength(value, minLength) {
  if (value.trim().length > minLength) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const checkValue = regEx.test(email);
  return checkValue;
}

function validateForm(event) {
  const subjectMinLength = 10;
  const addressMinLength = 25;
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, subjectMinLength) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, addressMinLength) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (
    name.value &&
    subject.value.length > subjectMinLength &&
    email.value &&
    address.value.length > addressMinLength
  ) {
    successMsg.innerHTML = `<h2 style="color:red; background-color:#E8E9EB ">Thank you!</h2>`;
  }
}

form.addEventListener("submit", validateForm);

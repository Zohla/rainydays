//Contact form validation

const msgLabel = document.querySelector(".message-label");
const subjectLabel = document.querySelector(".subject-label");
const mailLabel = document.querySelector(".email-label");

function validateEmail() {
  const emailField = document.querySelector("#email");
  const emailRegEx =
    /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let emailResult = emailRegEx.test(`${emailField.value}`);
  console.log(emailResult);

  if (emailResult == true && emailField.value.length > 0) {
    emailField.classList.remove("incorrect");
    return true;
  } else {
    emailField.classList.add("incorrect");
    return false;
  }
}
function validateSubject() {
  const subjectField = document.querySelector("#subject");

  if (subjectField.value.length > 0) {
    subjectField.classList.remove("incorrect");
    return true;
  } else {
    subjectField.classList.add("incorrect");
    return false;
  }
}

function validateMsg() {
  const msgField = document.querySelector("#message");

  if (msgField.value.length > 0) {
    msgField.classList.remove("incorrect");
    return true;
  } else {
    msgField.classList.add("incorrect");
    return false;
  }
}

function validateForm() {
  let validForm = true;

  if (validateSubject() == false) {
    subjectLabel.innerHTML += `<span> Subject must be longer.</span>`;
    validForm = false;
  } else {
    subjectLabel.innerHTML = "Subject:";
  }

  if (validateEmail() == false) {
    mailLabel.innerHTML += `<span> Please fill in a valid emailadress.</span>`;
    validForm = false;
  } else {
    mailLabel.innerHTML = "Email:";
  }
  if (validateMsg() == false) {
    msgLabel.innerHTML += `<span> Please fill in a message.</span>`;
    validForm = false;
  } else {
    msgLabel.innerHTML = "Message";
  }

  return validForm;
}

const formContainer = document.querySelector(".contact-form");

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  //(hacky way of) showing and removing errormessages
  mailLabel.innerHTML = "Email:";
  subjectLabel.innerHTML = "Subject:";
  msgLabel.innerHTML = "Name:";
  if (validateForm() == false) {
    console.log("crap");
  } else {
    formContainer.innerHTML = `<h3 class="succes-message">Your form is submitted. Thank you for reaching out to us!</h3>`;
  }
});

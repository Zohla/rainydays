const checkoutBtn = document.querySelector(".checkout-btn");

const fullNameLabel = document.querySelector(".name");
const adressLabel = document.querySelector(".adress");
const phoneLabel = document.querySelector(".phone");
const cardNumLabel = document.querySelector(".card-num");

function validateName() {
  const fullName = document.querySelector("#name");

  if (fullName.value.length > 0) {
    fullName.classList.remove("incorrect");
    return true;
  } else {
    fullName.classList.add("incorrect");
    return false;
  }
}
function validateAdress() {
  const adress = document.querySelector("#adress");

  if (adress.value.length > 0) {
    adress.classList.remove("incorrect");
    return true;
  } else {
    adress.classList.add("incorrect");
    return false;
  }
}
function validatePhone() {
  const phone = document.querySelector("#phone");

  if (phone.value.length > 7) {
    phone.classList.remove("incorrect");
    return true;
  } else {
    phone.classList.add("incorrect");
    return false;
  }
}
function validateCard() {
  const cardNum = document.querySelector("#card-num");

  if (document.querySelector("#PayPal").checked) {
    cardNum.classList.add("hide");
    cardNumLabel.classList.add("hide");
    return true;
  } else if (
    document.querySelector("#Visa").checked &&
    cardNum.value.length > 10
  ) {
    cardNum.classList.remove("incorrect");
    return true;
  } else {
    cardNum.classList.add("incorrect");
    return false;
  }
}

function validateChackoutForm() {
  let validForm = true;

  if (validateName() == false) {
    fullNameLabel.innerHTML += `<i> Name must be longer.</i>`;
    validForm = false;
  } else {
    fullNameLabel.innerHTML = "Name:";
  }

  if (validateAdress() == false) {
    adressLabel.innerHTML += `<i> Please fill in a valid adress.</i>`;
    validForm = false;
  } else {
    adressLabel.innerHTML = "Adress:";
  }
  if (validatePhone() == false) {
    phoneLabel.innerHTML += `<i> Please fill in a valid phone number.</i>`;
    validForm = false;
  } else {
    phoneLabel.innerHTML = "Phone:";
  }
  if (validateCard() == false) {
    cardNumLabel.innerHTML += `<i> Please fill in a valid card number.</i>`;
    validForm = false;
  } else {
    cardNumLabel.innerHTML = "Cardnumber:";
  }

  return validForm;
}

checkoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fullNameLabel.innerHTML = "Name:";
  adressLabel.innerHTML = "Adress:";
  phoneLabel.innerHTML = "Phone:";
  cardNumLabel.innerHTML = "Cardnumber:";
  if (validateChackoutForm() == false) {
  } else {
    window.location.href = "checkoutsuccess.html";
  }
});

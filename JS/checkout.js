//get data from headless CMS and output on page

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");
const productSize = params.get("size");

const cartContainer = document.querySelector("#cart");
const productImg = document.querySelector(".item-checkout-pic");
const productNameCart = document.querySelector(".product-name-cart");
const productSizeCart = document.querySelector(".product-size");
const productPrice = document.querySelector(".checkout-item-price");
const productTotal = document.querySelector(".checkout-items-price");
const shippingCost = document.querySelector(".shipping-cost");
const total = document.querySelector(".total");

const url = `https://wp-rainydays.maweb.tech/wp-json/wc/store/products/${productId}`;

async function getProduct() {
  if (!querystring) {
    cartContainer.innerHTML = "<p>No items in cart</p>";
  } else {
    try {
      const response = await fetch(url);
      const getResults = await response.json();
      createHTML(getResults);
    } catch (error) {
      console.log(error);
      cartContainer.innerHTML = "<p>Sorry, an error occured</p>";
    }
  }
}
getProduct();

function createHTML(product) {
  let shippingCostCalc = 0;
  let itemCost = parseInt(`${product.prices.price}`);

  productImg.src = `${product.images[0].src}`;
  productNameCart.innerHTML = `${product.name}`;
  productSizeCart.innerHTML += `${productSize}`;
  productPrice.innerHTML = `$${product.prices.price}`;
  productTotal.innerHTML = `$${product.prices.price}`;

  if (parseInt(itemCost) > 99) {
    shippingCost.innerHTML += 0;
    shippingCostCalc = 0;
    total.innerHTML = itemCost + shippingCostCalc;
  } else {
    shippingCost.innerHTML += `${product.prices.currency_symbol} 69`;
    shippingCostCalc = 69;
    total.innerHTML = itemCost + shippingCostCalc;
  }
}

const checkoutBtn = document.querySelector("#checkout-btn");

const fullNameLabel = document.querySelector(".name");
const adressLabel = document.querySelector(".adress");
const phoneLabel = document.querySelector(".phone");
const cardNumLabel = document.querySelector(".card-num");

function validateName() {
  const fullName = document.querySelector("#name");

  if (fullName.value.length > 0) {
    fullNameLabel.classList.remove("incorrect");
    return true;
  } else {
    fullNameLabel.classList.add("incorrect");
    return false;
  }
}
function validateAdress() {
  const adress = document.querySelector("#adress");

  if (adress.value.length > 0) {
    adressLabel.classList.remove("incorrect");
    return true;
  } else {
    adressLabel.classList.add("incorrect");
    return false;
  }
}
function validatePhone() {
  const phone = document.querySelector("#phone");

  if (phone.value.length > 7) {
    phoneLabel.classList.remove("incorrect");
    return true;
  } else {
    phoneLabel.classList.add("incorrect");
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
    cardNumLabel.classList.remove("incorrect");
    return true;
  } else {
    cardNumLabel.classList.add("incorrect");
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

const addToCartBtn = document.querySelector(".add-to-cart-btn");

const jacketSizeSelect = document.getElementById("size");

const cartConfMessage = document.querySelector(".cart-add-conf-msg");
const sizeErrorMsg = document.querySelector(".size-error-msg");

const goToCheckout = document.querySelector(".go-to-checkout");

let pickedSize;

jacketSizeSelect.addEventListener("change", (e) => {
  pickedSize = e.target.value;
  /* console.log(pickedSize); */
});

addToCartBtn.addEventListener("click", (e) => {
  /*  e.preventDefault(); */

  if (pickedSize !== undefined && pickedSize !== "choose") {
    console.log(pickedSize);
    cartConfMessage.classList.remove("hide-msg");
    goToCheckout.classList.remove("hide-msg");
    sizeErrorMsg.classList.add("hide-msg");
    /* sizeErrorMsg.classList.remove("hide-msg"); */
  } else {
    console.log(pickedSize);
    cartConfMessage.classList.add("hide-msg");
    sizeErrorMsg.classList.remove("hide-msg");
  }
});

const readMoreLink = document.querySelector(".read-more");
const moreReviews = document.querySelectorAll(".review-cont");

readMoreLink.addEventListener("click", () => {
  for (let i = 0; i < moreReviews.length; i++) {
    moreReviews[i].classList.toggle("hide");
  }
  readMoreLink.innerHTML = "Hide reviews";
});

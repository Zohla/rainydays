const addToCartBtn = document.querySelector(".add-to-cart-btn");

const jacketSizeSelect = document.getElementById("size");

const jacketSize = jacketSizeSelect.value;

jacketSizeSelect.addEventListener("change", (e) => {
  let picketSize = e.target.value;
  console.log(picketSize);
});

addToCartBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

const addToCartBtn = document.querySelector(".add-to-cart-btn");

const jacketSizeSelect = document.getElementById("size");

const cartConfMessage = document.querySelector(".cart-add-conf-msg");
const sizeErrorMsg = document.querySelector(".size-error-msg");

const goToCheckout = document.querySelector(".go-to-checkout");

let pickedSize;

//get data from headless CMS and output on page

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");
const productContainer = document.querySelector(".container-jacket-specific");
const h1JacketName = document.querySelector(".h1-sub-pages");
const jacketImg = document.querySelector(".jacket-specific-img");
const jacketDescription = document.querySelector(".product-info");
const productPrice = document.querySelector(".price");
const navTree = document.querySelector(".nav-tree");
const checkoutLink = document.querySelector(".checkout-link");

const url = `https://wp-rainydays.maweb.tech/wp-json/wc/store/products/${productId}`;

async function getProduct() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);
    createHTML(getResults);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = "<p>Sorry, an error occured</p>";
  }
}
getProduct();

function createHTML(product) {
  if (`${product.on_sale}` == "true") {
    navTree.innerHTML += `${product.name}`;
    h1JacketName.innerHTML = `${product.name}`;
    jacketImg.src = `${product.images[0].src}`;
    jacketDescription.innerHTML += `${product.description}`;
    productPrice.innerHTML = `<p><span class="strike-old-price">${product.prices.regular_price} ${product.prices.currency_symbol}</span><span class="sale-price">${product.prices.sale_price} ${product.prices.currency_symbol}</span></p>`;
    checkoutLink.href = `checkout.html?id=${product.id}`;
  } else {
    navTree.innerHTML += `${product.name}`;
    h1JacketName.innerHTML = `${product.name}`;
    jacketImg.src = `${product.images[0].src}`;
    jacketDescription.innerHTML += `${product.description}`;
    productPrice.innerHTML = `$ ${product.prices.price}`;
    checkoutLink.href = `checkout.html?id=${product.id}`;
  }
}

jacketSizeSelect.addEventListener("change", (e) => {
  pickedSize = e.target.value;
});

addToCartBtn.addEventListener("click", (e) => {
  if (pickedSize !== undefined && pickedSize !== "choose") {
    cartConfMessage.classList.remove("hide-msg");
    goToCheckout.classList.remove("hide-msg");
    sizeErrorMsg.classList.add("hide-msg");
  } else {
    cartConfMessage.classList.add("hide-msg");
    sizeErrorMsg.classList.remove("hide-msg");
  }
});

const readMoreLink = document.querySelector(".read-more");
const moreReviews = document.querySelectorAll(".review-cont");

readMoreLink.addEventListener("click", () => {
  readMoreLink.innerHTML = "Hide reviews";
  for (let i = 0; i < moreReviews.length; i++) {
    moreReviews[i].classList.toggle("hide");
    if (moreReviews[i].classList.contains("hide"))
      readMoreLink.innerHTML = "Read more reviews";
  }
});

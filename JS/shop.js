const url = "https://wp-rainydays.maweb.tech/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const nonNewArrivals = document.querySelector(".non-new-arrivals");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
    /* createHTMLold(getResults); */
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    if (`${product.categories[0].id}` == 18) {
      productContainer.innerHTML += `<div class="product">
        <a href="jacket-specific.html?id=${product.id}" class='inspect jacket-short-info'>
        <h2 class="product-name-h2">${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}">
        <p class="product_short_description"> ${product.short_description}</p>
        <p class="price">${product.prices.price} ${product.prices.currency_symbol} </p>
        </a>
        </div>`;
    } else {
      nonNewArrivals.innerHTML += `<div class="product">
        <a href="jacket-specific.html?id=${product.id}" class='inspect jacket-short-info'>
        <h2 class="product-name-h2">${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}">
        <p class="product_short_description"> ${product.short_description}</p>
        <p class="price">${product.prices.price} ${product.prices.currency_symbol} </p>
        </a>
        </div>`;
    }
  });
}

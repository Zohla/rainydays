const url = "https://wp-rainydays.maweb.tech/wp-json/wc/store/products";
const jacketInfoContainer = document.querySelector(".jacket-info-container");
async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    console.log(`${product.on_sale}`);
    if (`${product.on_sale}` == "true") {
      jacketInfoContainer.innerHTML += `<div class="jacket-short-info">
        <a href="jacket-specific.html?id=${product.id}" class="inspect">
          <img class="jacket-1 jacket" src="${product.images[0].src}" alt="mehei seamless jacket">
          <p class="jacket-name">${product.name}</p>
          <p>${product.short_description}</p>
          <p><span class="strike-old-price">${product.prices.regular_price} ${product.prices.currency_symbol}</span><span class="sale-price">${product.prices.sale_price} ${product.prices.currency_symbol}</span></p>
        </a>
      </div>`;
    }

    /* `<div class="product">
      <a href="jacket-specific.html?id=${product.id}">
      <h2>${product.name}</h2>
      <img src="${product.images[0].src}" alt="${product.name}">
      <p class="product_short_description"> ${product.short_description}</p>
      <p class="price">${product.prices.price} ${product.prices.currency_symbol} </p>
      </a>
      </div>`; */
  });
}

import { getLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
    this.itemsQ = 0;
    this.subtotalPrice = 0;
    this.shippingPrice = 0;
    this.tax = 0;
  }

  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    if (!cartItems) {
      document.querySelector(this.parentSelector).innerHTML = `
      <h1>Nothing to see here! Add something to the cart first</h1>
      `;
      console.log("Empty Cart!");
    } else {
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));

      document.querySelector(this.parentSelector).innerHTML =
        htmlItems.join("");
    }
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimarySmall}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${item.quantity}</p>
    <p class="cart-card__price">$${item.FinalPrice * item.quantity}</p>
  </li>`;

  return newItem;
}

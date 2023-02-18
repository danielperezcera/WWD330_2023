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

        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    
        document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    }

}
  
  function cartItemTemplate(item) {
    const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
  
    return newItem;
  }


  
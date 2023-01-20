/*
export default class ProductDetails {
    constructor(category) {
      this.category = category;
      this.path = `../public/json/${this.category}.json`;
    }
    getData() {
      return fetch(this.path)
        .then(convertToJson)
        .then((data) => data);
    }
    async findProductById(id) {
      const products = await this.getData();
      return products.find((item) => item.Id === id);
    }
  }

*/

import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
      }

    async init() {
        
        this.product = await this.dataSource.findProductById(this.productId);

        this.renderProductDetails("main");

        document.getElementById("addToCart").addEventListener("click", this.addToCart.bind(this));
        
    }

    addToCart() {
        setLocalStorage("so-cart", this.product);
    }
    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
          "afterBegin",
          productDetailsTemplate(this.product)
        );
      }
    
  }

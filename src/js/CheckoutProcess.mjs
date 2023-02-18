import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {
    //constructor(key, outputSelector) {
    constructor(key) {
        this.key = key;
        this.list = [];
        //this.outputSelector = outputSelector;
        this.itemsQ = 0;
        this.subtotalPrice = 0;
        this.shippingPrice = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }

    init() {
        this.list = getLocalStorage(this.key);
        this.calculateItemSummary();
    }

    calculateItemSummary() {
        // calculate and display the total amount of the items in the cart, and the number of items.
        this.itemsQ = this.list.length;
        console.log(this.list);
        console.log(this.list.length);

      }
      calculateOrdertotal() {
        // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
        let subtotal = 0;
        this.list.forEach((item) => {
           subtotal += item.FinalPrice;
          });

        this.subtotalPrice = subtotal;

        if(this.itemsQ == 1){
            this.shippingPrice = 10;
        }else if(this.itemsQ > 1){
            this.shippingPrice = 10 + (this.itemsQ-1) * 2;
        }
  
        this.tax = this.subtotalPrice * 0.06;

        this.orderTotal = this.subtotalPrice + this.tax + this.shippingPrice;

        // display the totals.
        this.displayOrderTotals();
      }

      displayOrderTotals() {
        // once the totals are all calculated display them in the order summary page
        document.getElementById("quantity").textContent = this.itemsQ;
        document.getElementById("subtotal").textContent = "$"+this.subtotalPrice.toFixed(2);
        document.getElementById("shipping").textContent = "$"+this.shippingPrice.toFixed(2);
        document.getElementById("tax").textContent = "$"+this.tax.toFixed(2);
        document.getElementById("ordertotal").textContent = "$"+this.orderTotal.toFixed(2);
      }
    

}
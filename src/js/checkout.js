import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

//let CheckoutProcess = new CheckoutProcess("so-cart",".product-list");
let CheckoutTotal = new CheckoutProcess("so-cart");

CheckoutTotal.init();
CheckoutTotal.calculateOrdertotal();

loadHeaderFooter();
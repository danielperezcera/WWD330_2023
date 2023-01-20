import { setLocalStorage,getLocalStorage,getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from './ProductDetails.mjs';

const productId = getParam('product');
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(product) {
  if(getLocalStorage("so-cart")){
    const query = getLocalStorage("so-cart");
    
    let data_clear = "";

    query.forEach(item => data_clear += JSON.stringify(item) + ",");

    let data = data_clear + JSON.stringify(product);

    localStorage.setItem("so-cart", "[" + data + "]");

  }else{
    setLocalStorage("so-cart", product);
  }
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);


console.log(dataSource.findProductById(productId));
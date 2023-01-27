// imports
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// instantiate ProductData
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductList("tents", dataSource, element);

console.log(productList.init());

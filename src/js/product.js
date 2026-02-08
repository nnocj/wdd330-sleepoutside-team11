import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

// this is to test if the getParam function can use the query string to display the correct product details on the product page.
const product = new ProductDetails(productId, dataSource);
product.init();



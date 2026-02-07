import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

//this code is to help me ensutre that after the user clicks add cart and the info is set to local storage, its stored as an array of objects.
function addProductToCart(product) {
  // Get existing cart or create empty array
  let cart = getLocalStorage("so-cart");

  if (!cart) {
    cart = [];
  }

  // Add new product
  cart.push(product);

  // Save updated cart
  setLocalStorage("so-cart", cart);
}

/**So now unlike this;
 * function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}Where I only saved one product object to local storage,
 with this function I create an array, and push each product object to that array before setting it to local storage.
 Even though initially only one object could be stored, it was not displaying because I was trying to use the map on an object.
 */

async function addToCartHandler() {
  const productId = getParam("product");
  const product = await dataSource.findProductById(productId);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);


// this is to test if the getParam function can use the query string to display the correct product details on the product page.

  const productId = getParam("product");
  console.log(dataSource.findProductById(productId));

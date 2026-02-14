import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { convertToJson } from "./ProductData.mjs";

/**At the moment, I'm learning about the need to create the product details class with the 
 * constructor, init, addProductToCart and renderProductDetails functions for 
 * 1. The product to keep track of some infos about itself
 * 2. Those actions that need to happend before the  class can be used are placed in the init for instance event listeners
 * 3. Ofcourse the addProductToCart to execute the main goal to add to cart
 * 4. The  renderProductDetails is for dynamic rendering of each product details based on id value plased in the query URL
 */
export default class ProductDetails {
  //constructor functions like the parameter initializer
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource; // this is gold
    this.path = `../json/${this.dataSource.category}.json`;
    this.productsByCategory = {};
    this.product = {};
  }

  async findProductDataByProductId(id) {
    const products = await fetch(this.path)
      .then(convertToJson)
      .then((data) => (data.Result ? data.Result : data)); // this is becasue some of api json file have staored the data i need in Result

    return products.find(
      // for standardization search
      (item) => item.Id === id
    );
  }

  async init() {
    this.product = await this.findProductDataByProductId(this.productId);

    if (!this.product) {
      console.error("Product not found.");
      return;
    }

    // the product details are needed before rendering the HTML
    console.log("Products:", this.product);
    console.log("ID:", this.productId);
    console.log("Datasource:", this.dataSource);
    console.log("Product category:", this.dataSource.category);
    console.log("Brand:", this.product.Brand);

    this.renderProductDetails();

    // once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
    const addButton = document.getElementById("addToCart");
    if (addButton) {
      addButton.addEventListener("click", this.addProductToCart.bind(this));
    }
  }

  addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];

    // push full product into cart
    cartItems.push(this.product);

    setLocalStorage("so-cart", cartItems);

    console.log("Product added to cart:", this.product);
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

//This function is mainly used render product details and place things in the cart.
function productDetailsTemplate(product) {
  document.querySelector("h2").textContent = product.Brand?.Name || "Unknown Brand";
  document.querySelector("h3").textContent = product.NameWithoutBrand || "Unnamed Product";

  const productImage = document.getElementById("productImage");

  if (productImage) {
    productImage.src =
      product.Images?.PrimaryMedium || product.Image || "/images/placeholder.jpg"; // use PrimaryMedium if available, otherwise use Image
    productImage.alt = product.NameWithoutBrand || "Product Image";
  }

  const priceEl = document.getElementById("productPrice");
  if (priceEl) {
    priceEl.textContent = product.FinalPrice || "0";
  }

  const colorEl = document.getElementById("productColor");
  if (colorEl) {
    colorEl.textContent = product.Colors?.[0]?.ColorName || "N/A";
  }

  const descEl = document.getElementById("productDesc");
  if (descEl) {
    descEl.innerHTML = product.DescriptionHtmlSimple || "";
  }

  const addButton = document.getElementById("addToCart");
  if (addButton) {
    addButton.dataset.id = product.Id;
  }
}

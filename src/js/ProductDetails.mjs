import { getLocalStorage, setLocalStorage } from "./utils.mjs";

/**At the moment, I'm learning about the need to create the product details class with the 
 * constructor, init, addProductToCart and renderProductDetails functions for 
 * 1. The product to keep track of some infos about itself
 * 2. Those actions that need to happend before the  class can be used are placed in the init for instance event listeners
 * 3. Ofcourse the addProductToCart to execute the main goal to add to cart
 * 4. The  renderProductDetails is for dynamic rendering of each product details based on id value plased in the query URL
 */
export default class ProductDetails {

  

  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;// this is gold
    this.product = {};
    
  }

  async getProduct() {
    const res = await fetch(`../json/${this.dataSource.category}.json`);
    const data = await res.json();
    this.product = data.find(item => item.Id === Number(this.productId));
  }
  

  async init() {
    // use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // the product details are needed before rendering the HTML
    console.log("ID:", this.productId);
    console.log("Datasource:", this.dataSource);
    console.log("Product category:", this.dataSource.category);
    console.log("Data:", await fetch(`../json/${this.dataSource.category}.json`));

 
    

    this.renderProductDetails();
    // once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  
  addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  async findProductById(id) {
  const data = await this.getData();
  return data.find(
    item => item.Id.toString().toLowerCase() === id.toString().toLowerCase()// for standardiization
  );
}


  
  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}


/* now seeing that at least only the product id is successfully retrieved, i will therefore
use the product id to fetch the product name or full product data from the source.*
*/


//This function is mainly used render product details and place things in the cart.
function productDetailsTemplate(product) {
  

  document.querySelector('h2').textContent = product.Brand.Name;
  document.querySelector('h3').textContent = product.NameWithoutBrand;

  const productImage = document.getElementById('productImage');
  productImage.src = product.Images ? product.Images.PrimaryMedium : product.Image; // use PrimaryMedium if available, otherwise use Image
  productImage.alt = product.NameWithoutBrand;

  document.getElementById('productPrice').textContent = product.FinalPrice;
  document.getElementById('productColor').textContent = product.Colors[0].ColorName;
  document.getElementById('productDesc').innerHTML = product.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
}


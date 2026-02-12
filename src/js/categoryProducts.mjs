/**At the moment, I'm learning about the need to create the product details class with the 
 * constructor, init, addProductToCart and renderProductDetails functions for 
 * 1. The product to keep track of some infos about itself
 * 2. Those actions that need to happend before the  class can be used are placed in the init for instance event listeners
 * 3. Ofcourse the addProductToCart to execute the main goal to add to cart
 * 4. The  renderProductDetails is for dynamic rendering of each product details based on id value plased in the query URL
 */
import { renderListWithTemplate } from "./utils.mjs";

export default class CategoryProducts {

  constructor(categoryId, dataSource) {
    this.categoryId = categoryId;
    this.categoryProducts = {};
    this.dataSource = dataSource;
  }

  async init() {
    // find product by category id.
    this.categoryProducts = await this.dataSource.getProductsByCategoryId(this.categoryId);
    // the product details are needed before rendering the HTML
    const parentElement = document.querySelector(".category-list");
    renderListWithTemplate(categoryProductsTemplate, parentElement, this.categoryProducts, position="afterbegin", clear=false);
  
  }



  
}




//This function is mainly used render category Products
function categoryProductsTemplate(categoryProduct) {
  document.querySelector('h2').textContent = categoryProduct.Brand.Name;
  document.querySelector('h3').textContent = categoryProduct.NameWithoutBrand;

  const productImage = document.getElementById('productImage');
  productImage.src = categoryProduct.Image;
  productImage.alt = categoryProduct.NameWithoutBrand;

  document.getElementById('productPrice').textContent = categoryProduct.FinalPrice;
  document.getElementById('productColor').textContent = categoryProduct.Colors[0].ColorName;
  document.getElementById('productDesc').innerHTML = categoryProduct.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
}

// ************* Alternative Display Product Details Method *******************
// function productDetailsTemplate(product) {
//   return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div></section>`;
// }
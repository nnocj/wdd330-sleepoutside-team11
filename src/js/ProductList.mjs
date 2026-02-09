import { renderListWithTemplate } from "./utils.mjs";

export default class ProdutList {


    constructor(category, dataSource, listElement) {
    this.category = category;
    this.product = {};
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
      // use the datasource to get the list of products from a category. findListByCategory will return a promise! use await or .then() to process it
      const list = await this.dataSource.getData();

      // render product list
      this.renderList(list);
  
    }
  


    renderList(list){
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}

//productcard template
function productCardTemplate(product) {
    return `<li class="product-card">
            <a href="product_pages/?product=${product.Id}">
              <img src="${product.Image}" alt="Image of ${product.NameWithoutBrand}">
                <h2 class="card__brand">${product.Brand.Name}</h2>
                <h3 class="card__name">${product.NameWithoutBrand}</h3>
                <p class="product-card__price">$${product.FinalPrice}</p>
                </a>
            </li>`
        }
  
 

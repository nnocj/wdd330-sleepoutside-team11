import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import CategoryData from "./categoryData.mjs";
import CategoryList from "./CategoryList.mjs";
import { loadHeaderFooter} from "./utils.mjs";

loadHeaderFooter();
//product section
const listElement = document.querySelector('.product-list');



//category section to display the list of navs
const categoryListElement = document.querySelector('.category-list');
const categoryDataSource = new CategoryData("category");
const categoryList = new CategoryList("category", categoryDataSource, categoryListElement);
categoryList.init();





/**Time to make the page load products dynamically based on category */
categoryListElement.addEventListener("click", (e) => {// the category list element is already defined
    
    //first lets clear the previous data before moving to a new one.
    listElement.innerHTML= "";
    
    const link = e.target.closest("a");

    if (!link) return; // clicked something else

    e.preventDefault();

    const category = link.textContent.trim().toLowerCase();

    const dataSource = new ProductData(category);
    const productList = new ProductList(category, dataSource, listElement);

    productList.init();
});



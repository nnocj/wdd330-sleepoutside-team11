import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

//products
//make here dynamic liading by category
const dataSource = new ProductData("tents");
/**check to see if category = tents  */
const productId = getParam("product");
// this is to test if the getParam function can use the query string to display the correct product details on the product page.
const product = new ProductDetails(productId, dataSource);
product.init();


//category

loadHeaderFooter();



const listElement = document.querySelector('.product-list');

/**Time to make the page load products dynamically based on category */
document.querySelectorAll(".category-nav-item a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = getParamKey();
        const dataSource = new ProductData(category);
        const productId = getParam("product");
        const product = new ProductDetails(productId, dataSource);

        product.init();
    })
})



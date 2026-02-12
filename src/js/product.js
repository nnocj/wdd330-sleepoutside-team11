import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

//products details rendition
//make here dynamic liading by category
const dataSource = new ProductData("sleeping-bags");
/**check to see if category = tents  */
const productId = getParam("product");// this one returns only numeric value of id
//render product details
const productDetails = new ProductDetails(productId, dataSource);
//render
productDetails.init();




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



import ProductData from "./ProductData.mjs";
import ProdutList from "./ProductList.mjs";
import { loadHeaderFooter, getParam} from "./utils.mjs";

loadHeaderFooter();

const listElement = document.querySelector('.product-list');
const dataSourcce = new ProductData();
const category = getParam("category"); //get category value from url

// So this get the category, data source and element to list the products in.
//now instead of maually plaing it with a string i get it dynamically from the actual url thorugh getParams
const productList = new ProdutList(category, dataSourcce, listElement);


productList.init();


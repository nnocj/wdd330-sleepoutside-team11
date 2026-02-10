import ProductData from "./ProductData.mjs";
import ProdutList from "./ProductList.mjs";
import { loadHeaderFooter} from "./utils.mjs";

loadHeaderFooter();

const listElement = document.querySelector('.product-list');
const dataSourcce = new ProductData("tents");
// So this get the category, data source and element to list the products in.
const productList = new ProdutList("tents", dataSourcce, listElement);


productList.init();


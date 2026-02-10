// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}


//getParam function
//this function will be used to search the query string for a specific parameter and return its value.
//I can use this function to get the product id from the query string, and use the id to find the product in the data source and display its details on the product page.
export function getParam(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  return urlParams.get(param);
}


export function renderListWithTemplate(templateFn, parentElement, list, position="afterbegin", clear=false) {
  const htmlStrings = list.map(templateFn);//this is to create an array of html strings holding each product.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}



export function renderWithTemplate(templateFn, parentElement, data, callback) {
  parentElement.innerHTML = templateFn;// All i do is to render the template in the parent element.
  if (callback) {
    callback(data);
  }
}

//I'm not exporting this out directly.
async function loadTemplate(path){
   const res = await fetch(path);
   const template = await res.text();
   return template;
}

//I believe that qs is the new shortcut for document.querySelector.
//I'm suing this function to load both the header and footer templates
export async function loadHeaderFooter(){
  const headerTemplate = await loadTemplate("../partials/header.html");// I changed to call the function directly
  const footerTemplate = await loadTemplate("../partials/footer.html");

  const headerElement = qs("#main-header");// I learned to be mindful of the rules for selecting
  const footerElement = qs("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}
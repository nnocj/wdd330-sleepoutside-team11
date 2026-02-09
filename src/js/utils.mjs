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
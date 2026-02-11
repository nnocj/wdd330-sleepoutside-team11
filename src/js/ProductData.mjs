const baseURL = import.meta.env.VITE_SERVER_URL;// to fetch from remote production server

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  
  
  async getData(category) {
    const response = await fetch(`${baseURL}/products/${category}`);// to fetch by products by category
    const data = await convertToJson(response);
    return data.Results;
  }

  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    console.log(data.Results);
    
    return data.Results;
  }
}

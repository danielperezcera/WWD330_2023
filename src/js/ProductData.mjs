const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
    //Vite needs public folder to not be referenced: https://vitejs.dev/guide/assets.html#the-public-directory
    // this.path = `../public/json/${this.category}.json`;
  }
  async getData(category) {
    // const response = await fetch(baseURL + `products/search/${category}`);
    // const data = await convertToJson(response);
    // return data.Result;
    return await fetch(baseURL + `products/search/${category}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
}

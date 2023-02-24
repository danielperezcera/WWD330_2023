// const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
const baseURL = "https://wdd330-backend.onrender.com/";

async function convertToJson(res) {
  const jsonResponse = await res.json(); //added team7
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "servicesError", message: jsonResponse }; //modified team7
    // throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor() {
    //Vite needs public folder to not be referenced: https://vitejs.dev/guide/assets.html#the-public-directory
    // this.path = `../public/json/${this.category}.json`;
  }
  async getData(category) {
    // const response = await fetch(baseURL + `products/search/${category}`);
    // const data = await convertToJson(response);
    // return data.Result;
    return await fetch(baseURL + `products/search/${category}`)
      .then((res) => convertToJson(res))
      .then((data) => data.Result);
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
}

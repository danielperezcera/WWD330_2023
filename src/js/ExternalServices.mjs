// const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
//const baseURL = "https://wdd330-backend.onrender.com/";
const baseURL = "https://wdd330-backend.vercel.app/";

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

  async loginRequest(user) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(baseURL + "login", options).then(
      convertToJson
    );
    return response.accessToken;
  }
  // make a request to the server for the current orders
  // requires: a valid token
  // returns: a list of orders
  async getOrders(token) {
    const options = {
      method: "GET",
      // the server will reject our request if we don't include the Authorization header with a valid token!
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(baseURL + "orders", options).then(
      convertToJson
    );
    return response;
  }
}

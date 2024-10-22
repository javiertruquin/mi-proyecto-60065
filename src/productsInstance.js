import axios from "axios";

export const productInstance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    headers: { "X-Custom-Header": "foobar" },
});

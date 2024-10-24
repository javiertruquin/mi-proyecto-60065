import axios from "axios";

export const Instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
    headers: { Authorization: "sdasdasd123123asdasd" },
});

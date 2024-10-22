import axios from "axios";
import { useEffect, useState } from "react";

const FetchingData = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = axios.get("https://fakestoreapi.com/products");
        getProducts
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
            .finally(() => console.log("termino"));
    }, []);

    console.log("FetchingData ~ products:", products);

    const createProducts = () => {
        const nuevoProducto = { title: "dsad", precio: 2000 };
        axios.post("https://fakestoreapi.com/products", nuevoProducto, {});
    };

    return <div>FetchingData</div>;
};

export default FetchingData;

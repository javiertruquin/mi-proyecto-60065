import axios from "axios";
import { useEffect, useState } from "react";
import { Instance } from "../api/Instance";
axios
const FetchingData = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = Instance.get("/products");
        getProducts
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
            .finally(() => console.log("termino"));
    }, []);

    console.log("FetchingData ~ products:", products);

    // const createProducts = () => {
    //     const nuevoProducto = { title: "dsad", precio: 2000 };
    //     Instance.post("/products", nuevoProducto, {});
    // };

    return <div>FetchingData</div>;
};

export default FetchingData;

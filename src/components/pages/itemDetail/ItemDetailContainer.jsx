import ItemDetail from "./ItemDetail";
import { products } from "../../../productos";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    let id = "1";
    const [item, setItem] = useState({});
    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id);
        setItem(productSelected);
    }, [id]);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

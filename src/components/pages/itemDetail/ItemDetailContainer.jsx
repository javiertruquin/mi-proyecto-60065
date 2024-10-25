import ItemDetail from "./ItemDetail";
import { products } from "../../../productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const agregarAlCarrito = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        console.log("agregarAlCarritto ~ objeto:", objeto);
    };

    const { id } = useParams(); //siempre devuelve un objeto {} puede estar vacio o puede tener propiedades
    const [item, setItem] = useState([]);
    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id);
        setItem(productSelected);
    }, [id]);

    return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;

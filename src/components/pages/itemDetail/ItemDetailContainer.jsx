import ItemDetail from "./ItemDetail";
import { products } from "../../../productos";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
    const { id } = useParams(); //siempre devuelve un objeto {} puede estar vacio o puede tener propiedades
    const { addToCart, getTotalQuantity } = useContext(CartContext);

    let totalInCart = getTotalQuantity(id);

    const [item, setItem] = useState([]);
    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id);
        setItem(productSelected);
    }, [id]);

    const agregarAlCarrito = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        addToCart(objeto);
    };
    return (
        <ItemDetail
            item={item}
            agregarAlCarrito={agregarAlCarrito}
            totalInCart={totalInCart}
        />
    );
};

export default ItemDetailContainer;

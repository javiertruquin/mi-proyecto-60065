// exportacion del contexto
// exportacion del componente de react que provea el contexto

import { createContext, useState } from "react";
export const CartContext = createContext();

// exportacion del componente de react que provea el contexto

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //agregar al carritto
    console.log(cart);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    //limpiar el carrito
    const resetCart = () => {
        setCart([]);
    };

    //eliminar el carrito
    const removeById = (id) => {
        let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
        setCart(arrayFiltrado);
    };

    //total a pagar del carrito
    let data = { cart, addToCart, removeById, resetCart };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

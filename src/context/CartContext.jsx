// exportacion del contexto
// exportacion del componente de react que provea el contexto

import { createContext, useState } from "react";
export const CartContext = createContext();

// exportacion del componente de react que provea el contexto

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    //agregar al carritto
    const addToCart = (product) => {
        let isInCart = cart.some((el) => el.id === product.id);
        if (isInCart) {
            // generar un nuevo array, igual q el anterior pero con un objeto modificado
            let nuevoArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return {
                        ...elemento,
                        quantity: elemento.quantity + product.quantity,
                    };
                } else {
                    return elemento;
                }
            });
            setCart(nuevoArray);
        } else {
            setCart([...cart, product]);
        }
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
    const getTotalAmount = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.precio * elemento.quantity;
        }, 0);
        return total;
    };

    const getTotalQuantity = (id) => {
        const product = cart.find((elemento) => elemento.id === id);
        return product ? product.quantity : 0;
    };

    const getTotalQuantityCart = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity;
        }, 0);
        return total;
    };

    let data = {
        cart,
        addToCart,
        removeById,
        resetCart,
        getTotalQuantity,
        getTotalAmount,
        getTotalQuantityCart,
    };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

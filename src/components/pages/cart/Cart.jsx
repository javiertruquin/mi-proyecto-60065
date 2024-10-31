import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
    const { cart, resetCart, removeById, getTotalAmount } =
        useContext(CartContext);
    // console.log("Cart ~ cart:", cart);
    let total = getTotalAmount();
    return (
        <div>
            {cart.map((product) => {
                return (
                    <div
                        key={product.id}
                        style={{
                            border: "2px solid black",
                            width: "300px",
                            marginBottom: "20px",
                        }}
                    >
                        <h1>{product.titulo}</h1>
                        <h1>cantidad:{product.quantity}</h1>
                        <button onClick={() => removeById(product.id)}>
                            Eliminar
                        </button>
                    </div>
                );
            })}
            <h1>finalizar compra</h1>
            <button onClick={resetCart}>Limpiar Carrito</button>
            <h2>Total a pagar es : {total} </h2>
            <Link to="/checkout">finalizar compra</Link>
        </div>
    );
};

export default Cart;

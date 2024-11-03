import { Counter } from "../../common/counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
    return (
        <div>
            <h2>Aca el detalle del productos:</h2>
            <h2>{item.titulo}</h2>
            <img src={item.portada} alt="" style={{ width: "100px" }} />
            <Counter
                stock={item.stock}
                agregarAlCarrito={agregarAlCarrito}
                totalInCart={totalInCart}
            />
        </div>
    );
};

export default ItemDetail;

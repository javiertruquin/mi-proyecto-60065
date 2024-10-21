import { Card } from "../../common/card/Card";

function ItemList({ items }) {
    console.log(items);
    return (
        <div>
            <h2>Listado de Productos</h2>
            {items.map(({ id, title, price, stock }) => (
                <Card key={id} title={title} price={price} stock={stock} />
            ))}
        </div>
    );
}

export default ItemList;

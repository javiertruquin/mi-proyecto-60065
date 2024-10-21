import { Card } from "../../common/card/Card";

function ItemList({ items }) {
    console.log(items);
    return (
        <>
            <h2>Listado de Productos</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                {items.map(({ id, title, price, stock, imageUrl }) => (
                    <Card
                        key={id}
                        title={title}
                        price={price}
                        stock={stock}
                        image={imageUrl}
                    />
                ))}
            </div>
        </>
    );
}

export default ItemList;

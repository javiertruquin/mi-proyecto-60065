import { Card } from "../../common/card/Card";

function ItemList({ items }) {
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
                {items.map(({ id, titulo, precio, stock, portada }) => (
                    <Card
                        key={id}
                        titulo={titulo}
                        precio={precio}
                        stock={stock}
                        portada={portada}
                        id={id}
                    />
                ))}
            </div>
        </>
    );
}

export default ItemList;

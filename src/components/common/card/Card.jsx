export const Card = ({ title, price, stock ,image }) => {
    return (
        <div
            style={{
                border: "2px solid black",
                width: "225px",
                height: "225px",
                margin: "10px",
                padding: "10px",
            }}
        >
            <h2>Titulo: {title}</h2>
            <h3>Precio: {price}</h3>
            <h3>Stock: {stock}</h3>
            <img src={image} alt='' style={{width:"100px"}}/>
            <button>Ver detalle</button>
        </div>
    );
};

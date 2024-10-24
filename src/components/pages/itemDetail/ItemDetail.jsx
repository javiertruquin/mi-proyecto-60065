const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>Aca el detalle del productos:</h2>
            <h2>{item.titulo}</h2>
            <img src={item.portada} alt="" style={{ width: "100px" }} />
        </div>
    );
};

export default ItemDetail;

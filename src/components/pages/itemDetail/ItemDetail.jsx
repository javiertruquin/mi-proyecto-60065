const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>Aca el detalle del productos:</h2>
            <h2>{item.title}</h2>
            <img src={item.imageUrl} alt="" style={{ width: "100px" }} />
        </div>
    );
};

export default ItemDetail;

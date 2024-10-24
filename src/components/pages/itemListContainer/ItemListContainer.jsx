// import { Box, Typography } from "@mui/material";
// import { Card } from "../../common/Card/Card";
import { useEffect, useState } from "react";
import { products } from "../../../productos";
import ItemList from "./ItemList";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const { name } = useParams();

    const [items, setItems] = useState([]);
    useEffect(() => {
        const unaFraccion = products.filter(
            (producto) => producto.categoria === name
        );

        const getProducts = new Promise((resolve) => {
            resolve(name ? unaFraccion : products);
        });
        getProducts.then((res) => {
            setItems(res);
        });
    }, [name]);

    return (
        <Box>
            <ItemList items={items} />
        </Box>
    );
};

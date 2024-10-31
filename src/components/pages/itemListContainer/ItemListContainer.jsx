// import { Box, Typography } from "@mui/material";
// import { Card } from "../../common/Card/Card";
import { useEffect, useState } from "react";
import { products } from "../../../productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

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
            setTimeout(() => {
                setItems(res);
            }, 2000);
        });
    }, [name]);

    return (
        <Box>
            <h2>titulo</h2>
            {items.length === 0 && (
                <>
                    <Skeleton variant="rectangular" width={200} height={100} />
                    <Skeleton variant="text" width={200} height={100} />
                    <Skeleton variant="text" width={200} height={100} />
                </>
            )}

            <ItemList items={items} />
            <h2>aca algo mas</h2>
        </Box>
    );
};

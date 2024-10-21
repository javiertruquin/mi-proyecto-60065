// import { Box, Typography } from "@mui/material";
// import { Card } from "../../common/Card/Card";
import { useEffect, useState } from "react";
import { products } from "../../../productos";
import ItemList from "./ItemList";
import { Box } from "@mui/material";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getProducts = new Promise((resolve) => {
            resolve(products);
        });
        getProducts.then((res) => {
            setItems(res);
        });
    }, []);

    return (
        <Box
        // align="center"
        // sx={{ backgroundColor: darkMode ? "blueviolet" : "white" }}
        >
            {/* <Typography variant="h1">{title}</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card title="Catan" price={500} stock={5} />
                <Card title="Tripulación" price={400} stock={4} />
            </Box> */}
            <ItemList items={items} />
        </Box>
    );
};

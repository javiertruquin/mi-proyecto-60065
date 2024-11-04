import { Box, Typography } from "@mui/material";
import { CardModel } from "../../common/cardModel/CardModel.jsx";
import { listProducts } from "./ItemList.js";

function ItemList({ items }) {
    return (
        <>
            <Typography variant="h2" textAlign={"center"}>
                Productos Destacados
            </Typography>
            <Box sx={listProducts}>
                {items.map(
                    ({ id, titulo, precio, stock, portada, categoria }) => (
                        <CardModel
                            key={id}
                            titulo={titulo}
                            precio={precio}
                            stock={stock}
                            portada={portada}
                            categoria={categoria}
                            id={id}
                        />
                    )
                )}
            </Box>
        </>
    );
}

export default ItemList;

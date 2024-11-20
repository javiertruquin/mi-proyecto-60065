import { Box, Typography } from "@mui/material";
import { CardModel } from "../../common/cardModel/CardModel.jsx";
import { listProducts } from "./ItemList.js";
import SkeletonCards from "../../common/cardModel/SkeletonCards.jsx";

function ItemList({ items }) {
    // var i = 0;
    return (
        <>
            <Typography variant="h2" textAlign={"center"}>
                Productos Destacados
            </Typography>
            <Box sx={listProducts}>
                {items.length === 0 && <SkeletonCards />}

                {items.map(
                    ({ id, titulo, precio, stock, portada, categoria }) => (
                        <>
                            <CardModel
                                key={id}
                                titulo={titulo}
                                precio={precio}
                                stock={stock}
                                portada={portada}
                                categoria={categoria}
                                id={id}
                            />
                        </>
                    )
                )}
            </Box>
        </>
    );
}

export default ItemList;

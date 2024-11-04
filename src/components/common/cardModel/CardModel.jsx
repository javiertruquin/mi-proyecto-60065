import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { cardImage, cardImageBox, cardStyle } from "./CardModel";

export const CardModel = ({ id, titulo, precio, portada, categoria }) => {
    return (
        <Box textAlign={"center"} sx={cardStyle}>
            <Link to={`/itemDetail/${id}`} style={{ textDecoration: "none" }}>
                <CardActionArea>
                    <Card >
                        <Box sx={cardImageBox}>
                            <CardMedia
                                sx={cardImage}
                                image={portada}
                                title={titulo}
                            />
                        </Box>
                        <CardContent>
                            <Typography variant="body2" sx={{ color: "text." }}>
                                {categoria}
                            </Typography>
                            <Typography variant="h4" component="div">
                                {titulo}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{ color: "text.secondary" }}
                            >
                                ${precio}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Link>
        </Box>
    );
};

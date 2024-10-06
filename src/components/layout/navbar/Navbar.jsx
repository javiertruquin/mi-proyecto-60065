import { Box, Typography } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { containerNavbar } from "./Navbar.js";
import ListType from "../../common/listType/ListType.jsx";

export const Navbar = () => {
    return (
        <>
            <Box sx={containerNavbar}>
                <Box sx={{ width: "200px", display: "flex",alignItems:"center"}}>
                    <img
                        src="https://res.cloudinary.com/dwwta0kis/image/upload/v1728181914/CurosReact/unnamed__3_-transformed_j7aaho.png"
                        alt="logo"
                        style={{ width: "200px" }}
                    />
                    <Typography
                        sx={{
                            color: "purple",
                            fontSize: "30px",
                            lineHeight:1.10,
                        }}
                    >
                        <b>La Guarida de los Meeples</b>
                    </Typography>
                </Box>

                <ListType />
                <CartWidget />
            </Box>
        </>
    );
};

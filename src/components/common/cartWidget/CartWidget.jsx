import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useState } from "react";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -7,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export const CartWidget = () => {
    const carrito = 4;
    // const [carrito, setCarrito] = useState(4);

    // const sumarCarrito = () => {
    //     setCarrito(carrito + 1);
    // };
    return (
        <Link to="/cart">
            <IconButton sx={{ margin: "20px" }} aria-label="cart">
                <StyledBadge badgeContent={carrito} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    );
};

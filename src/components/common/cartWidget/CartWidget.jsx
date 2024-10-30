import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -7,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <Link to="/cart">
            <IconButton sx={{ margin: "20px" }} aria-label="cart">
                <StyledBadge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    );
};

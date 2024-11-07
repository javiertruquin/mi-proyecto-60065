import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
    const { getTotalQuantityCart } = useContext(CartContext);
    let total = getTotalQuantityCart();

    return (
        <Link to="/cart">
            <IconButton sx={{ margin: "20px" }} aria-label="cart">
                <Badge badgeContent={total} color="secondary" showZero>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Link>
    );
};

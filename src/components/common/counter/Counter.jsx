import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -7,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export const Counter = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(0);

    const sumarContador = () => {
        stock > contador ? setContador(contador + 1) : alert("stock maximo");
    };
    const restarContador = () => {
        contador > 0 ? setContador(contador - 1) : alert("stock minimo");
    };
    return (
        <div>
            <IconButton
                onClick={sumarContador}
                sx={{ margin: "20px" }}
                aria-label="cart"
            >
                <StyledBadge badgeContent={contador} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <button onClick={() => agregarAlCarrito(contador)}>agregar</button>
            <button onClick={restarContador}>restar</button>
        </div>
    );
};

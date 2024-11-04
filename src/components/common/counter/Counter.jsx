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

export const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
    const [contador, setContador] = useState(1);

    const sumarContador = () => {
        stock - totalInCart > contador
            ? setContador(contador + 1)
            : alert("stock maximo");
    };
    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : alert("stock minimo");
    };
    return (
        <div>
            <button onClick={sumarContador}>Sumar</button>
            <div>
                <h3>Cantidad : {contador}</h3>
                <IconButton
                    onClick={() => {
                        agregarAlCarrito(contador);
                        setContador(1);
                    }}
                    aria-label="cart"
                >
                    <StyledBadge badgeContent="+" color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </div>

            <button onClick={restarContador}>Restar</button>
        </div>
    );
};

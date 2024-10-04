import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function PruebaComponentes() {
    const [visible, setVisible] = useState(false);

    const cambiarVisibilidad = () => {
        setVisible(!visible);
    };
    return (
        <div style={{ margin: "10px" }}>
            <TextField label="Email" variant="outlined" />
            <TextField
                label="Contraseña"
                variant="outlined"
                type={visible ? "text" : "password"}
            />
            <IconButton onClick={cambiarVisibilidad} color="secondary">
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>

            <Button variant="contained" fullWidth>
                Contained
            </Button>
        </div>
    );
}

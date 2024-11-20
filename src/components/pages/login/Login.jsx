import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            {/* <form onSubmit={funcionDelFormulario}>
                <input
                    type="text"
                    placeholder="javier truquin"
                    name="name"
                    onChange={capturarInfo}
                />
                <input
                    type="email"
                    placeholder="email@mail.com"
                    name="email"
                    onChange={capturarInfo}
                />
                <input
                    type="text"
                    placeholder="111131313"
                    name="phoneNumber"
                    onChange={capturarInfo}
                />

                <button>Comprar</button>
                <button type="button">Cancelar</button>
            </form> */}
            <FormControl variant="standard"></FormControl>
            {/* <TextField
                label="Usuario"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    },
                }}
            /> */}
            <Box>
                <TextField
                    sx={{ m: 1, width: "25ch" }}
                    id="outlined-basic"
                    label="Usuario"
                    variant="outlined"
                />
            </Box>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword
                                        ? "hide the password"
                                        : "display the password"
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
                <Button sx={{ mt: 2 }} variant="contained">
                    Iniciar Sesión
                </Button>
            </FormControl>
        </>
    );
};

export default Login;

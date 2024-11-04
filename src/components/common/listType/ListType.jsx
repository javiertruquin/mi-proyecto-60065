import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function ListType() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "rebeccapurple",
                        margin:"5px"
                    }}
                >
                    <ListItemButton>
                        <ListItemText primary="Todos" />
                    </ListItemButton>
                </Link>
                <Link
                    to="/category/Party"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "rebeccapurple",
                        margin:"5px"
                    }}
                >
                    <ListItemButton>
                        <ListItemText primary="Partys" />
                    </ListItemButton>
                </Link>
                <Link
                    to="/category/Euro"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "rebeccapurple",
                        margin:"5px"
                    }}
                >
                    <ListItemButton>
                        <ListItemText primary="Euros" />
                    </ListItemButton>
                </Link>
            </Box>
        </>
    );
}

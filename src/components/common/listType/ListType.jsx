import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function ListType() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "rebeccapurple",
                }}
            >
                <List component="nav" aria-label="secondary mailbox folder">
                    <Link to="/">
                        <ListItemButton>
                            <ListItemText primary="Todos" />
                        </ListItemButton>
                    </Link>
                    <Link to="/category/partys">
                        <ListItemButton>
                            <ListItemText primary="Partys" />
                        </ListItemButton>
                    </Link>
                    <Link to="/category/euros">
                        <ListItemButton>
                            <ListItemText primary="Euros" />
                        </ListItemButton>
                    </Link>
                </List>
            </Box>
        </>
    );
}

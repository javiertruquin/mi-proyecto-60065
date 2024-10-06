import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function ListType() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor:"rebeccapurple",
                }}
            >
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton>
                        <ListItemText primary="Todos" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Partys" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Euros" />
                    </ListItemButton>
                </List>
            </Box>
        </>
    );
}

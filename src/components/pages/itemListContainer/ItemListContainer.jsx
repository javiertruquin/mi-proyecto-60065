import { Box, Typography } from "@mui/material";
import { Card } from "../../common/Card/Card";

export const ItemListContainer = ({title , darkMode}) => {
    return (
        <Box align="center" sx={{backgroundColor: darkMode ? "blueviolet" : "white"}}>
            <Typography variant="h1">{title}</Typography>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Card title="Catan" price={500} stock={5} />
                <Card title="Tripulación" price={400} stock={4} />
            </Box>
        </Box>
    );
};

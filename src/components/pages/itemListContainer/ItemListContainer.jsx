import { Box, Typography } from "@mui/material";
import { Card } from "../../common/Card/Card";

export const ItemListContainer = ({title}) => {
    return (
        <Box align="center">
            <Typography variant="h1">{title}</Typography>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Card title="Catan" price={500} stock={5} />
                <Card title="Tripulación" price={400} stock={5} />
            </Box>
        </Box>
    );
};

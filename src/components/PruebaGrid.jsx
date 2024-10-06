import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styles } from "./PruebaGrid";
export default function PruebaGrid() {
    return (
        <>
            <Grid container={true}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Typography align="center" sx={styles.tituloUno}>
                        Caja 1
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Typography lign="center" sx={styles.tituloDos}>
                        Caja 2
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Typography lign="center" sx={styles.tituloTres}>
                        Caja 3
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

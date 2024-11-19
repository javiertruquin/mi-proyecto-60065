import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { containerNavbar } from "./navbar.js";
import ListType from "../../common/listType/ListType.jsx";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.webp";

const Navbar = () => {
    return (
        <>
            <Box sx={containerNavbar}>
                <Box
                    sx={{
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Link to="/" style={{ marginBottom: "-4px" }}>
                        <img src={logo} alt="logo" style={{ width: "200px" }} />
                    </Link>
                    {/* <Typography
                        sx={{
                            color: "purple",
                            fontSize: "30px",
                            lineHeight: 1.1,
                        }}
                    >
                        <b>La Guarida de los Meeples</b>
                    </Typography> */}
                </Box>

                <ListType />
                <Box
                    sx={{
                        width: "200px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <CartWidget />
                </Box>
            </Box>
        </>
    );
};

export default Navbar;

import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { containerNavbar } from "./navbar.js";
import ListType from "../../common/listType/ListType.jsx";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.webp";
import UserWidget from "../../common/userWidget/UserWidget.jsx";

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
                </Box>

                <ListType />
                <Box
                    sx={{
                        width: "200px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <UserWidget />
                    <CartWidget />
                </Box>
            </Box>
        </>
    );
};

export default Navbar;

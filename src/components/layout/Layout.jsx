import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer";
import { Container } from "@mui/material";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Container fixed>
                <Outlet />
            </Container>

            <Footer />
        </div>
    );
};

export default Layout;

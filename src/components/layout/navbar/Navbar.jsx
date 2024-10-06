import { Box } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget";
// import { containerNavbar } from "./navbar.js";
// import ListType from "../../common/listType/ListType.jsx";

export const Navbar = () => {
    
    return (
        <>
            <Box
                
            >
                <Box sx={{width:"200px"}}>
                    <img
                        src="https://res.cloudinary.com/dwwta0kis/image/upload/v1728181914/CurosReact/unnamed__3_-transformed_j7aaho.png"
                        alt="logo"
                        style={{width:"150px"}}
                    />
                    
                </Box>
                {/* <ul>
                    <li>Todos</li>
                    <li>Party</li>
                    <li>Euros</li>
                </ul> */}
                {/* <ListType /> */}
                <CartWidget />
            </Box>
        </>
    );
};

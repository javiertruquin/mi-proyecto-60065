import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
// import logo from "../../../assets/images/logo.jpg";

export const Navbar = () => {
    return (
        <>
            <div className="container-navbar">
                {/* <h2>Comision-60065 Imagen</h2> */}
                {/* <img src={logo} alt="logo" /> */}
                <img
                    src="https://res.cloudinary.com/dwwta0kis/image/upload/v1727995086/CurosReact/logo_t5z4xu.jpg"
                    alt="logo"
                    style={{
                        margin: "10px",
                        color: "red",
                        marginTop: "12px",
                    }}
                />
                <ul>
                    <li>Todos</li>
                    <li>Urbanas</li>
                    <li>Deportivas</li>
                </ul>

                <CartWidget />
            </div>
        </>
    );
};

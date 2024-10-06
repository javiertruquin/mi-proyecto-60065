import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
    return (
        <>
            <div className="container-navbar">
                <img
                    src="https://res.cloudinary.com/dwwta0kis/image/upload/v1728181914/CurosReact/unnamed__3_-transformed_j7aaho.png"
                    alt="logo"
                    style={{
                        margin: "10px",
                        color: "red",
                        marginTop: "12px",
                    }}
                />
                <ul>
                    <li>Todos</li>
                    <li>Party</li>
                    <li>Euros</li>
                </ul>

                <CartWidget />
            </div>
        </>
    );
};

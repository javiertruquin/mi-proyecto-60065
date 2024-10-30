import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
// import Posts from "./Posts.jsx";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Checkout from "./components/pages/checkout/Checkout.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
// import ItemDetail from "./components/pages/itemDetail/ItemDetail.jsx";
// import { useState, useEffect } from "react";
// import Comments from "./Comments.jsx";
// import Users from "./Users.jsx";
// import FetchingData from "./components/pages/fetchingData/FetchingData.jsx";

function App() {
    // const [darkMode, setDarkMode] = useState(false);

    // const cambiarModo = () => {
    //     setDarkMode(!darkMode);
    // };
    // const [entrarEnElDom, setEntrarEnElDom] = useState(true);
    // const montarOdesmontar = () => {
    //     setEntrarEnElDom(!entrarEnElDom);
    // };

    // useEffect(() => {
    //     console.log("componente comienza:" + entrarEnElDom);
    //     console.log("DarkMode comienza:" + darkMode);
    // }, []);

    return (
        <BrowserRouter>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<h1>Login</h1>} />
                    <Route
                        path="/itemDetail/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route
                        path="/category/:name"
                        element={<ItemListContainer />}
                    />

                    <Route path="*" element={<h2>404 not found</h2>} />
                    {/* <Posts /> */}
                </Routes>
                <Footer />
                {/* <button onClick={cambiarModo}>Dark Mode</button>
            <button onClick={montarOdesmontar}>Montar/Desmontar</button> */}
                {/* {entrarEnElDom ? (
                <ItemListContainer title="Saludo" darkMode={darkMode} />
                ) : null} */}
                {/* <Users /> */}
                {/* <Comments /> */}
                {/* <FetchingData /> */}
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;

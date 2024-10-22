// import { useState, useEffect } from "react";
// import Comments from "./Comments.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import Posts from "./Posts.jsx";
// import Users from "./Users.jsx";
// import FetchingData from "./components/pages/fetchingData/FetchingData.jsx";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx";

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
        <>
            {/* <button onClick={cambiarModo}>Dark Mode</button>
            <button onClick={montarOdesmontar}>Montar/Desmontar</button> */}
            <Navbar />
            {/* {entrarEnElDom ? (
                <ItemListContainer title="Saludo" darkMode={darkMode} />
            ) : null} */}
            <ItemListContainer title="Saludo" />
            <ItemDetailContainer />
            {/* <Users /> */}
            <Posts />
            {/* <Comments /> */}
            {/* <FetchingData /> */}
        </>
    );
}

export default App;

import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(false)
    
    const cambiarModo = () =>{
        setDarkMode(!darkMode)
    }
    
    return (
        <>
            <button onClick={cambiarModo}>Dark Mode</button>
            <Navbar />
            <ItemListContainer title="Saludo" darkMode={darkMode}/>
        </>
    );
}

export default App;

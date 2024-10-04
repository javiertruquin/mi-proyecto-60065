//hock
//useState
import { useState } from "react";

function Counter() {
    const [contador, setContador] = useState(0);
    const [isDark, setIsDark] = useState(false);

    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        setContador(contador - 1);
    };

    const cambiarTema = () => {
        setIsDark(!isDark);
    };

    return (
        <div>
            <h2>Counter = {contador}</h2>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
            <button onClick={cambiarTema}>Cambiar Tema</button>
        </div>
    );
}

export default Counter;

import { useState } from "react";

const Checkout = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        //comunicacion con la api
        console.log(userInfo);
    };

    const capturarInfo = (evento) => {
        const { name, value } = evento.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <form onSubmit={funcionDelFormulario}>
            <input
                type="text"
                placeholder="javier truquin"
                name="name"
                onChange={capturarInfo}
            />
            <input
                type="email"
                placeholder="email@mail.com"
                name="email"
                onChange={capturarInfo}
            />
            <input
                type="text"
                placeholder="111131313"
                name="phoneNumber"
                onChange={capturarInfo}
            />

            <button>Comprar</button>
            <button type="button">Cancelar</button>
        </form>
    );
};

export default Checkout;

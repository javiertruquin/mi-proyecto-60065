import { useEffect, useState } from "react";

const FetchingData = () => {
    const [arrayUsuarios, setArrayUsuarios] = useState([]);

    useEffect(() => {
        const getUsers = fetch("https://jsonplaceholder.org/users");

        getUsers
            .then((res) => res.json())
            .then((usuarios) => {
                setArrayUsuarios(usuarios);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const getUser = fetch("https://jsonplaceholder.org/users/2");
        getUser
            .then((res) => res.json())
            .then((usuarios) => {
                console.log(usuarios);
            });
    }, []);

    const createUser = () => {
        let user = {
            firstname: "Pepito",
            lastname: "Doe",
            email: "johndoe@example.com",
            birthDate: "1973-01-22",
            login: {
                uuid: "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
                username: "johndoe",
                password: "jsonplaceholder.org",
                md5: "c1328472c5794a25723600f71c1b4586",
                sha1: "35544a31cc19bd6520af116554873167117f4d94",
                registered: "2023-01-10T10:03:20.022Z",
            },
            address: {
                street: "123 Main Street",
                suite: "Apt. 4",
                city: "Anytown",
                zipcode: "12345-6789",
                geo: {
                    lat: "42.1234",
                    lng: "-71.2345",
                },
            },
            phone: "(555) 555-1234",
            website: "www.johndoe.com",
            company: {
                name: "ABC Company",
                catchPhrase: "Innovative solutions for all your needs",
                bs: "Marketing",
            },
        };
        fetch("https://jsonplaceholder.org/users", {
            method: "POST",
            body: JSON.stringify(user), // "{ firstname: "pepito" }"
        });
    };

    const deleteUser = () => {
        fetch("https://jsonplaceholder.org/users/2", {
            method: "DELETE",
        });
    };

    const updateUser = () => {
        let user = {
            firstname: "Actualizadin",
            lastname: "Doe",
            email: "johndoe@example.com",
            birthDate: "1973-01-22",
            login: {
                uuid: "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
                username: "johndoe",
                password: "jsonplaceholder.org",
                md5: "c1328472c5794a25723600f71c1b4586",
                sha1: "35544a31cc19bd6520af116554873167117f4d94",
                registered: "2023-01-10T10:03:20.022Z",
            },
            address: {
                street: "123 Main Street",
                suite: "Apt. 4",
                city: "Anytown",
                zipcode: "12345-6789",
                geo: {
                    lat: "42.1234",
                    lng: "-71.2345",
                },
            },
            phone: "(555) 555-1234",
            website: "www.johndoe.com",
            company: {
                name: "ABC Company",
                catchPhrase: "Innovative solutions for all your needs",
                bs: "Marketing",
            },
        };
        fetch("https://jsonplaceholder.org/users/2", {
            method: "PUT",
            body: JSON.stringify(user), // "{ firstname: "pepito" }"
        });
    };

    return (
        <div>
            <h1>Aca los usuarios:</h1>
            {arrayUsuarios.map((usuarios) => {
                return <h2 key={usuarios.id}>{usuarios.firstname}</h2>;
            })}
            <button onClick={createUser}>Crear</button>
            <button onClick={deleteUser}>Borrar</button>
            <button onClick={updateUser}>Actualizar</button>
        </div>
    );
};

export default FetchingData;

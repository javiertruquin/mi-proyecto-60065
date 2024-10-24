import axios from "axios";
import { useEffect, useState } from "react";

const FetchingAsync = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const getUsers = axios.get("https://jsonplaceholder.org/users");
    //     getUsers
    //         .then((res) => res.json())
    //         .then((res) => setUsers(res.data))
    //         .catch();
    // }, []);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.org/users"
                );
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                console.log("termino el ttry catch");
            }
        };
        getUsers();
    }, []);
    console.log("FetchingAsync ~ users:", users);
    return <div>FetchingAsync</div>;
};

export default FetchingAsync;

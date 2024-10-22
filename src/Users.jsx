import { useFetch } from "./hooks/useFetch";

const Users = () => {
    const { data: users, loading } = useFetch(
        "https://jsonplaceholder.org/users"
    );

    return <div>Users</div>;
};

export default Users;

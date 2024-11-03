import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const isAuth = true;
    // const jwt = true
    // const rol = "admin"
    return <div>{isAuth ? <Outlet /> : <Navigate />}</div>;
};

export default ProtectedRoutes;

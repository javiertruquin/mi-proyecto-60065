import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";
import { Toaster } from "sonner";
import { routes } from "./routes/routes.js";
import Layout from "./components/layout/Layout.jsx";

function App() {
    /* <Route element={<ProtectedRoutes />}></Route> */

    return (
        <BrowserRouter>
            <Toaster duration={2000} richColors position="top-center" />
            <CartContextProvider>
                <Routes>
                    <Route element={<Layout />}>
                        {routes.map(({ id, path, Element }) => (
                            <Route key={id} path={path} element={<Element />} />
                        ))}
                    </Route>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;

import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer.jsx";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer.jsx";
import Cart from "../components/pages/cart/Cart.jsx";
import Checkout from "../components/pages/checkout/Checkout.jsx";
import Login from "../components/pages/login/Login.jsx";
import NotFound from "../components/pages/notFound/NotFound.jsx";

export const routes = [
    {
        id: 1,
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: 2,
        path: "/itemDetail/:id",
        Element: ItemDetailContainer,
    },
    {
        id: 3,
        path: "/category/:name",
        Element: ItemListContainer,
    },
    {
        id: 4,
        path: "/checkout",
        Element: Checkout,
    },
    {
        id: 5,
        path: "/cart",
        Element: Cart,
    },
    {
        id: 6,
        path: "/login",
        Element: Login,
    },
    {
        id: 7,
        path: "*",
        Element: NotFound,
    },
];

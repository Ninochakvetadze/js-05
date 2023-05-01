import { About, Contact, Home } from "../../pages";
import { Products } from "../products";
export const routesMap = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "products",
        element: <Products />,
    },
];

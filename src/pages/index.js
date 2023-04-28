import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
export { Header } from "./Header";
export { Footer } from "./Footer";

export const routesMap = [
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
];

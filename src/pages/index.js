import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
export { Header } from "./header";
export { Footer } from "./footer";

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
];

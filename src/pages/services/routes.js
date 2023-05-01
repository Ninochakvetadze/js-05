import { About, Contact, Home } from "../../pages";
// import { Home } from "./home";
// import { About } from "./about";
// import { Contact } from "./contact";
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

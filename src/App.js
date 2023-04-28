import "./css/App.css";
import { routesMap, Header, Footer } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {routesMap.map((route, index) => (
                    <Route
                        key={`route-list-${index}`}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
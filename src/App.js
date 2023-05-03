import "./css/App.scss";
import { Header, Footer } from "./pages";
import { routesMap } from "./pages/services/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContextProvider } from "./pages/services/contexts";
export default function App() {
    return (
        <BrowserRouter>
            <LanguageContextProvider>
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
            </LanguageContextProvider>
        </BrowserRouter>
    );
}

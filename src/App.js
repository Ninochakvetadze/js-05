import "./css/App.css";
import { Header, Footer } from "./pages";

function ButtonComponent({ name }) {
    return <button>{name}</button>;
}

function App() {
    return (
        <>
            <Header />
            <ButtonComponent name="John" />
            <ButtonComponent name="Hiorgi" />
            <Footer />
        </>
    );
}

export default App;

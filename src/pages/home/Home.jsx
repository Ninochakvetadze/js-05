import { useContext } from "react";
import { LanguageContext } from "../services/contexts/LanguageContext";
export function Home() {
    const { language, setLanguage } = useContext(LanguageContext);
    console.log(language);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

import React from "react";
import { useContext } from "react";
import { Nav } from "./components";
import Button from "@mui/material/Button";
import { LanguageContext } from "../services/contexts/LanguageContext";
export function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    // console.log(language);
    return (
        <div id="header">
            <Nav />
            <div className="language">
                <Button variant="outlined">EN</Button>
                <Button variant="outlined">Ka</Button>
            </div>
        </div>
    );
}

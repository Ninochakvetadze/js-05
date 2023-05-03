import React from "react";
import { useContext } from "react";
import { Nav } from "./components";
import Button from "@mui/material/Button";
import { LanguageContext } from "../services/contexts/LanguageContext";
export function Header() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div id="header">
            <Nav />
            <div className="language">
                <Button onClick={() => setLanguage("en")} variant="outlined">
                    EN
                </Button>
                <Button onClick={() => setLanguage("ka")} variant="outlined">
                    Ka
                </Button>
            </div>
        </div>
    );
}

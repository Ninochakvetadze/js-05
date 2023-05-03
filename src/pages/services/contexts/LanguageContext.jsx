import React, { createContext } from "react";
export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    return (
        <LanguageContext.Provider
            value={{
                language: "en",
            }}
        >
            { children}
        </LanguageContext.Provider>
    );
};

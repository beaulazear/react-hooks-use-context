import { useState } from "react";
import React from "react";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
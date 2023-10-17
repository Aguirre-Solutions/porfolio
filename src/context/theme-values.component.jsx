import { createContext } from "react";
import { useTheme } from "@mui/material";

export const ThemeValuesContext = createContext();

const ThemeValuesProvider = ({ children }) => {
    const theme = useTheme();

    return (
        <ThemeValuesContext.Provider value={theme}>
            {children}
        </ThemeValuesContext.Provider>
    );
};

export default ThemeValuesProvider;

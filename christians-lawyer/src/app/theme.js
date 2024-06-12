'use client';
import { useState, useMemo, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Cookies from 'js-cookie';

function getThemeMode() {
    const themeMode = Cookies.get('themeMode')?.toLowerCase();
    if (themeMode === 'light' || themeMode === 'dark') {
        return themeMode;
    }
    return 'light';
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Theme({ children }) {
    const [mode, setMode] = useState(getThemeMode());
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode(prevMode => {
                const newMode = (prevMode === 'light') ? 'dark' : 'light';
                Cookies.set('themeMode', newMode, { expires: 365 });
                return newMode;
            });
        }
    }), []);

    const theme = useMemo(() => createTheme({
        palette: {
            mode
        }
    }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
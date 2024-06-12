'use client';
import { useState, useEffect, useMemo, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Cookies from 'js-cookie';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Theme({ children }) {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        if (Cookies.get('themeMode')?.toLowerCase() === 'dark') {
            setMode('dark');
        }
    }, []);

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
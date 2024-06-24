'use client';
import { useState, useEffect, useMemo, createContext, ReactNode } from 'react';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Cookies from 'js-cookie';
import { PaletteMode } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Theme({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<string>('light');

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

    const theme = useMemo(() => {
        const options: ThemeOptions = {
            palette: {
                mode: mode as PaletteMode
            }
        };

        return createTheme(options);
    }, [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light'
    },
    backgrounds: {
        transparent: 'rgba(255, 255, 255, 80%)'
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
    backgrounds: {
        transparent: 'rgba(0, 0, 0, 70%)'
    }
});

export { lightTheme, darkTheme };
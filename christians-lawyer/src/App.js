import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './components/ThemeContext';
import { lightTheme, darkTheme } from './components/Theme';
import ChristiansLawyer from "./components/ChristiansLawyer";
import './App.css';

export default function App(props) {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => {
      setIsDark(isDark => !isDark);
  };
  
  return (
    <ThemeContext.Provider value={{ toggle }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {props.server ?
          <StaticRouter location={props.location} context={{}}>
            <ChristiansLawyer />
          </StaticRouter> :
          <BrowserRouter>
            <ChristiansLawyer />
          </BrowserRouter>}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
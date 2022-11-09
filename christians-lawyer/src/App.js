import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './components/ThemeContext';
import { lightTheme, darkTheme } from './components/Theme';
import ChristiansLawyer from "./components/ChristiansLawyer";
import Cookies from 'js-cookie';
import './App.css';

export default function App(props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(Cookies.get('isDark') === 'true');
  }, []);

  const toggle = () => {
      setIsDark(isDark => {
        Cookies.set('isDark', !isDark, { expires: 365 });
        return !isDark;
      });
  };
  
  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
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
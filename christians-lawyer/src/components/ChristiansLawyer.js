import React, { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GavelIcon from '@mui/icons-material/Gavel';
import { ThemeContext } from './ThemeContext';

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export default function ChristiansLawyer() {

    const theme = useContext(ThemeContext);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const toggleTheme = () => {
        handleCloseNavMenu();
        theme.toggle();
    };

	return (
        <>
            <HideOnScroll>
                <AppBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <GavelIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Christian’s Lawyer
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                    display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <MenuItem onClick={toggleTheme}>
                                        <Typography textAlign="center">Theme</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Christian’s Lawyer
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    onClick={toggleTheme}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Theme
                                </Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Routes>
                <Route
                    path='/'
                    element={<>
                        <Helmet
                            htmlAttributes={{ lang: 'en' }}
                            title="Christian’s Lawyer | Legal Aid"
                            meta={[
                                {
                                    name: 'title',
                                    content: "Christian’s Lawyer | Legal Aid"
                                },
                                {
                                    name: 'description',
                                    content: 'Lawyer for Christ - Christian Attorney offering legal aid in Phoenix, Arizona'
                                },
                                {
                                    name: 'keywords',
                                    content: 'Lawyer,Attorney,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
                                }
                            ]}
                            link={[
                                {
                                    rel: 'canonical',
                                    href: 'https://www.christianslawyer.org'
                                }
                            ]}
                        />
                        Test
                    </>}
                />
            </Routes>
        </>
	);
}
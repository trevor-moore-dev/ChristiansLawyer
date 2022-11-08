import React, { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { ThemeContext } from './ThemeContext';
import { Link } from "react-router-dom";
import GolgothaBackground from '../resources/images/golgotha.png';

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
    const [checked, setChecked] = useState(theme.isDark);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const toggleTheme = (e) => {
        handleCloseNavMenu();
        setChecked(e.target.checked);
        theme.toggle();
    };

	return (
        <>
            <HideOnScroll>
                <AppBar color='default'>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' }
                                }}
                            >
                                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Christian’s Lawyer
                                </Link>
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="navigation menu"
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
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to='/services' style={{ color: 'inherit', textDecoration: 'none' }}>
                                                Services
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to='/frequently-asked-questions' style={{ color: 'inherit', textDecoration: 'none' }}>
                                                FAQ
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to='/contact-us' style={{ color: 'inherit', textDecoration: 'none' }}>
                                                Contact Us
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={toggleTheme}>
                                        <Switch
                                            color="default"
                                            checked={checked}
                                            inputProps={{ 'aria-label': 'toggle theme' }}
                                        />
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1
                                }}
                            >
                                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Christian’s Lawyer
                                </Link>
                            </Typography>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Typography
                                    textAlign="center"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Link to='/services' style={{ color: 'inherit', textDecoration: 'none' }}>
                                        SERVICES
                                    </Link>
                                </Typography>
                                <Typography
                                    textAlign="center"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Link to='/frequently-asked-questions' style={{ color: 'inherit', textDecoration: 'none' }}>
                                        FAQ
                                    </Link>
                                </Typography>
                                <Typography
                                    textAlign="center"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Link to='/contact-us' style={{ color: 'inherit', textDecoration: 'none' }}>
                                        CONTACT US
                                    </Link>
                                </Typography>
                                <Tooltip title="Toggle Theme">
                                    <Switch
                                        color="default"
                                        checked={checked}
                                        onClick={toggleTheme}
                                        inputProps={{ 'aria-label': 'toggle theme' }}
                                        sx={{ my: 2, mx: 1 }}
                                    />
                                </Tooltip>
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
                        <img src={GolgothaBackground} style={{ width: '100%' }} alt='Jesus Christ the KING' />
                    </>}
                />
            </Routes>
        </>
	);
}
import React, { useState, useContext } from "react";
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
import { Link, NavLink } from "react-router-dom";

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export default function Header() {

    const linkStyles = {
        color: 'inherit',
        fontSize: '14px',
        letterSpacing: '2px',
        textDecoration: 'none'
    };

    const activeLinkStyles = {
        ...linkStyles,
        textDecoration: 'underline',
        textUnderlineOffset: '7px',
        textDecorationThickness: '2px',
        fontWeight: 'bold'
    };

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
        setChecked(e.target.checked);
        theme.toggle();
    };

    return (
        <HideOnScroll>
            <AppBar color='default'>
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                xs: 'flex-start',
                                md: 'space-between'
                            }
                        }}
                    >
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                            noWrap
                            sx={{
                                fontSize: {
                                    xs: '24px',
                                    md: '32px'
                                }
                            }}
                        >
                            <Link
                                to='/'
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}
                            >
                                Christian’s Lawyer
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <NavLink to='/services' style={({ isActive }) => (isActive ? activeLinkStyles : linkStyles )}>
                                    SERVICES
                                </NavLink>
                            </Typography>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <NavLink to='/frequently-asked-questions' style={({ isActive }) => (isActive ? activeLinkStyles : linkStyles )}>
                                    FAQ
                                </NavLink>
                            </Typography>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <NavLink to='/contact-us' style={({ isActive }) => (isActive ? activeLinkStyles : linkStyles )}>
                                    CONTACT US
                                </NavLink>
                            </Typography>
                            <Tooltip title="Toggle Theme">
                                <Switch
                                    color="default"
                                    checked={checked}
                                    onClick={toggleTheme}
                                    inputProps={{ 'aria-label': 'toggle theme' }}
                                    sx={{ my: 2, mx: 2 }}
                                />
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};
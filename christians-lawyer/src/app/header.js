'use client';
import { useState, useContext } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Container,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    Switch,
    Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ColorModeContext } from './theme';

const linkStyles = {
    color: 'inherit',
    fontSize: '14px',
    letterSpacing: '2px',
    textDecoration: 'none'
}

const activeLinkStyles = {
    ...linkStyles,
    textDecoration: 'underline',
    textUnderlineOffset: '7px',
    textDecorationThickness: '2px',
    fontWeight: 'bold'
}

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header() {
    const theme = useTheme();
    const router = useRouter();
    const colorMode = useContext(ColorModeContext);
    const [checked, setChecked] = useState(theme.palette.mode === 'dark');
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const toggleTheme = (e) => {
        setChecked(e.target.checked);
        colorMode.toggleColorMode();
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
                                        <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                                            Home
                                        </Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href='/services' style={{ color: 'inherit', textDecoration: 'none' }}>
                                            Services
                                        </Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href='/what-is-the-gospel' style={{ color: 'inherit', textDecoration: 'none' }}>
                                            What Is The Gospel
                                        </Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href='/contact-us' style={{ color: 'inherit', textDecoration: 'none' }}>
                                            Contact Us
                                        </Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={toggleTheme}>
                                    <Switch
                                        color="default"
                                        checked={checked}
                                        inputProps={{ 'aria-label': checked ? 'light mode' : 'dark mode' }}
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
                                href='/'
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}
                            >
                                Christians Lawyer
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <Link href='/' style={router.pathname == '/' ? activeLinkStyles : linkStyles}>
                                    HOME
                                </Link>
                            </Typography>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <Link href='/services' style={router.pathname == '/services' ? activeLinkStyles : linkStyles}>
                                    SERVICES
                                </Link>
                            </Typography>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <Link href='/what-is-the-gospel' style={router.pathname == '/what-is-the-gospel' ? activeLinkStyles : linkStyles}>
                                    WHAT IS THE GOSPEL
                                </Link>
                            </Typography>
                            <Typography
                                textAlign="center"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 2, display: 'flex', alignItems: 'center' }}
                            >
                                <Link href='/contact-us' style={router.pathname == '/contact-us' ? activeLinkStyles : linkStyles}>
                                    CONTACT US
                                </Link>
                            </Typography>
                            <Tooltip title={checked ? 'Light Mode' : 'Dark Mode'}>
                                <Switch
                                    color="default"
                                    checked={checked}
                                    onClick={toggleTheme}
                                    sx={{ my: 2, mx: 2 }}
                                />
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}
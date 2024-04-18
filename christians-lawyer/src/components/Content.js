import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Services from './Services';
import Gospel from './Gospel';
import Contact from './Contact';
import Box from '@mui/material/Box';

export default function Content() {
    return (
        <Box sx={{ pt: { xs: '56px', md: '64px' } }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/what-is-the-gospel' element={<Gospel />} />
                <Route path='/contact-us' element={<Contact />} />
            </Routes>
        </Box>
    );
};
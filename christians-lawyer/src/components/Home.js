import { Button, Typography } from "@mui/material";
import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <>
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
                        content: 'Christian Attorney offering legal aid in Phoenix, Arizona'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/'
                    }
                ]}
            />
            <img src={Background} style={{ width: '100%' }} alt="Christian Lawyer" />
            <Box sx={{ width: { md: '80%', xs: '90%' }, m: '0 auto', textAlign: 'center' }}>
                <Typography variant='h1' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>Contact your Christian Lawyer</Typography>
                <Typography variant='h2' sx={{ fontSize: '2rem', px: 2, py: 1 }}>Legal aid from a Christian perspective <i>to the glory of God</i></Typography>
                <Typography sx={{ px: 2, py: 1 }}>Romans 8:28-29</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='mailto:hope@christianslawyer.org'>EMAIL US TODAY</Button>
            </Box>
        </>
    );
};
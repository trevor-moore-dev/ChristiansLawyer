import { Button, Typography } from "@mui/material";
import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';
import Paper from '@mui/material/Paper';

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
            <Paper elevation={3} sx={{ top: '30%', left: 0, right: 0, m: 'auto', width:{ xs: '90%', md: '60%' }, position:{ xs: 'inherit', md: 'absolute' }, background: (theme) => theme.backgrounds.transparent }}>
                <Typography sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>Contact your Christian Lawyer</Typography>
                <Typography sx={{ fontSize: '2rem', px: 2, py: 1 }} variant="h1">Legal aid from a Christian perspective to the glory of God</Typography>
                <Typography sx={{ px: 2, py: 1 }}>Romans 8:28-29</Typography>
                <Button variant='contained' sx={{ m: 2 }}>EMAIL US TODAY</Button>
            </Paper>
        </>
    );
};
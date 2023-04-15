import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';
import Box from '@mui/material/Box';

export default function Home() {

    useEffect(() => {
        new Image().src = Background;
    }, []);

    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christians Lawyer | Legal Aid"
                meta={[
                    {
                        name: 'title',
                        content: "Christians Lawyer | Legal Aid"
                    },
                    {
                        name: 'description',
                        content: 'Christian Attorney offering free legal aid'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice,Phoenix,Phoenix Arizona,Arizona'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/'
                    }
                ]}
            />
            <Box
                sx={{
                    height: {
                        xs: '200px',
                        sm: '300px',
                        md: '400px',
                        lg: '500px',
                        xl: '500px'
                    }
                }}
            >
                <img
                    src={Background}
                    alt="Christian Lawyer"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>
            <Box sx={{ width: { md: '80%', xs: '90%' }, m: '0 auto', textAlign: 'center' }}>
                <Typography variant='h1' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>Contact your Christian Lawyer</Typography>
                <Typography variant='h2' sx={{ fontSize: '2rem', px: 2, py: 1 }}>Legal aid from a Christian perspective <i>to the glory of God</i></Typography>
                <Typography sx={{ px: 2, py: 1 }}>Romans 8:28-29</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='mailto:hope@christianslawyer.org'>EMAIL US TODAY</Button>
            </Box>
        </>
    );
};
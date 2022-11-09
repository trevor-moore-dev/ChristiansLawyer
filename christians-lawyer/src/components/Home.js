import { Button, Typography } from "@mui/material";
import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';

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
            <Typography>Contact your Christian Lawyer</Typography>
            <Typography>Legal aid from a Christian perspective to the glory of God.</Typography>
            <Typography>Romans 8:28-29</Typography>
            <Button>EMAIL US TODAY</Button>
        </>
    );
};
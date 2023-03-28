import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/golgotha.png';
import { Box, Button, Typography } from "@mui/material";

export default function Faq() {
    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christian’s Lawyer | FAQ"
                meta={[
                    {
                        name: 'title',
                        content: "Christian’s Lawyer | FAQ"
                    },
                    {
                        name: 'description',
                        content: 'Frequently asked legal questions from a Christian perspective'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/frequently-asked-questions'
                    }
                ]}
            />
            <img src={Background} style={{ width: '100%' }} alt="Golgotha" />
            <Box sx={{ width: { md: '80%', xs: '90%' }, m: '0 auto', textAlign: 'center' }}>
                <Typography variant='h1' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>How do I become a Christian?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>For God so loved the world, that He gave his only Son, that whoever believes in Him should not perish but have eternal life (John 3:16).</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>Truly, truly, I say to you, whoever hears My word and believes Him who sent Me has eternal life. He does not come into judgment, but has passed from death to life (John 5:24).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=qqHUSwmv3gg' target='_blank'>What is the Gospel?</Button>
                <Typography variant='h2' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>Why do I need the Gospel of Jesus Christ?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>The times of ignorance God overlooked, but now He commands all people everywhere to repent, because He has fixed a day on which He will judge the world in righteousness by a Man whom He has appointed; and of this He has given assurance to all by raising Him from the dead (Acts 17:30-31).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=JaFRMaqHAdY' target='_blank'>Why does it matter?</Button>
                <Typography variant='h2' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>What's the purpose of my life?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>You make known to me the path of life; in Your presence there is fullness of joy; at Your right hand are pleasures forevermore (Psalm 16:11).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=o0v0ugR_4Vo' target='_blank'>Where can I find joy?</Button>
            </Box>
        </>
    );
};
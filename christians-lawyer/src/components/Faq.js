import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/golgotha.png';
import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-material-ui-carousel';

import english1 from '../resources/images/english-tract-1.jpg';
import english2 from '../resources/images/english-tract-2.jpg';
import english3 from '../resources/images/english-tract-3.jpg';
import english4 from '../resources/images/english-tract-4.jpg';
import english5 from '../resources/images/english-tract-5.jpg';
import english6 from '../resources/images/english-tract-6.jpg';
import english7 from '../resources/images/english-tract-7.jpg';
import english8 from '../resources/images/english-tract-8.jpg';
import english9 from '../resources/images/english-tract-9.jpg';
import english10 from '../resources/images/english-tract-10.jpg';
import english11 from '../resources/images/english-tract-11.jpg';

import spanish1 from '../resources/images/spanish-tract-1.jpg';
import spanish2 from '../resources/images/spanish-tract-2.jpg';
import spanish3 from '../resources/images/spanish-tract-3.jpg';
import spanish4 from '../resources/images/spanish-tract-4.jpg';
import spanish5 from '../resources/images/spanish-tract-5.jpg';
import spanish6 from '../resources/images/spanish-tract-6.jpg';
import spanish7 from '../resources/images/spanish-tract-7.jpg';
import spanish8 from '../resources/images/spanish-tract-8.jpg';
import spanish9 from '../resources/images/spanish-tract-9.jpg';
import spanish10 from '../resources/images/spanish-tract-10.jpg';
import spanish11 from '../resources/images/spanish-tract-11.jpg';

export default function Faq() {

    useEffect(() => {
        new Image().src = Background;
    }, []);

    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christians Lawyer | FAQ"
                meta={[
                    {
                        name: 'title',
                        content: "Christians Lawyer | FAQ"
                    },
                    {
                        name: 'description',
                        content: 'Frequently asked legal questions from a Christian perspective'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice,Phoenix,Phoenix Arizona,Arizona'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/frequently-asked-questions'
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
                    alt="Golgotha"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>
            <Box sx={{ width: { md: '80%', xs: '90%' }, m: '0 auto', textAlign: 'center' }}>
                <Typography variant='h1' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>How do I become a Christian?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>For God so loved the world, that He gave his only Son, that whoever believes in Him should not perish but have eternal life (John 3:16).</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>Truly, truly, I say to you, whoever hears My word and believes Him who sent Me has eternal life. He does not come into judgment, but has passed from death to life (John 5:24).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=NUB4I5vO12o' target='_blank' rel='noopener'>What is the Gospel?</Button>
                <Typography variant='h2' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>Why do I need the Gospel of Jesus Christ?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>The times of ignorance God overlooked, but now He commands all people everywhere to repent, because He has fixed a day on which He will judge the world in righteousness by a Man whom He has appointed; and of this He has given assurance to all by raising Him from the dead (Acts 17:30-31).</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord (Romans 6:23).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=t1BWSOVNm4A' target='_blank' rel='noopener'>Why does it matter?</Button>
                <Typography variant='h2' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>What's the purpose of my life?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>You make known to me the path of life; in Your presence there is fullness of joy; at Your right hand are pleasures forevermore (Psalm 16:11).</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>For He satisfies the longing soul, and the hungry soul He fills with good things (Psalm 107:9).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=_DJ5AJfx3so' target='_blank' rel='noopener'>Where can I find joy?</Button>
                <Typography variant='h2' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>How can I know God personally?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>My sheep hear My voice, and I know them, and they follow Me. I give them eternal life, and they will never perish, and no one will snatch them out of My hand (John 10:27-28).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='http://www.4laws.com/laws/englishkgp/default.htm' target='_blank' rel='noopener'>The four spiritual laws</Button>
                <Typography variant='h2' sx={{ fontSize: '1.5rem', px: 2, pt: 2 }}>How can I go to Heaven instead of Hell?</Typography>
                <Typography variant='h2' sx={{ fontSize: '1rem', px: 2, py: 1 }}>Enter by the narrow gate. For the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few (Matthew 7:13-14).</Typography>
                <Button variant='contained' sx={{ m: 2 }} href='https://www.youtube.com/watch?v=7gr0xXfR3L8' target='_blank' rel='noopener'>Jesus is the bridge from man to God</Button>
            </Box>
            <Grid container sx={{ width: { xs: '90%', md: '60%', lg: '80%' }, margin: '0 auto', pt: 8 }}>
                <Grid item xs={12} md={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                    <Carousel
                        animation='slide'
                        navButtonsAlwaysVisible
                        fullHeightHover={false}
                        autoPlay={false}
                        sx={{
                            maxWidth: '500px',
                            maxHeight: '400px',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english1} className='contain' alt='Engish Gospel Tract page 1' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english2} className='contain' alt='Engish Gospel Tract page 2' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english3} className='contain' alt='Engish Gospel Tract page 3' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english4} className='contain' alt='Engish Gospel Tract page 4' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english5} className='contain' alt='Engish Gospel Tract page 5' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english6} className='contain' alt='Engish Gospel Tract page 6' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english7} className='contain' alt='Engish Gospel Tract page 7' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english8} className='contain' alt='Engish Gospel Tract page 8' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english9} className='contain' alt='Engish Gospel Tract page 9' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english10} className='contain' alt='Engish Gospel Tract page 10' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={english11} className='contain' alt='Engish Gospel Tract page 11' />
                        </Box>
                    </Carousel>
                </Grid>
                <Grid item xs={12} md={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                    <Carousel
                        animation='slide'
                        navButtonsAlwaysVisible
                        fullHeightHover={false}
                        autoPlay={false}
                        sx={{
                            maxWidth: '500px',
                            maxHeight: '400px',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish1} className='contain' alt='Spanish Gospel Tract page 1' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish2} className='contain' alt='Spanish Gospel Tract page 2' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish3} className='contain' alt='Spanish Gospel Tract page 3' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish4} className='contain' alt='Spanish Gospel Tract page 4' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish5} className='contain' alt='Spanish Gospel Tract page 5' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish6} className='contain' alt='Spanish Gospel Tract page 6' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish7} className='contain' alt='Spanish Gospel Tract page 7' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish8} className='contain' alt='Spanish Gospel Tract page 8' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish9} className='contain' alt='Spanish Gospel Tract page 9' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish10} className='contain' alt='Spanish Gospel Tract page 10' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LazyLoadImage src={spanish11} className='contain' alt='Spanish Gospel Tract page 11' />
                        </Box>
                    </Carousel>
                </Grid>
            </Grid>
        </>
    );
};
import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/golgotha.png';
import { Grid, Stack, Box, Link, Typography, IconButton } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { pdfjs, Document, Page } from 'react-pdf';

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

import assuranceForEternity from '../resources/documents/assurance-for-eternity.pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

export default function Gospel() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        new Image().src = Background;
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christians Lawyer | What Is The Gospel"
                meta={[
                    {
                        name: 'title',
                        content: "Christians Lawyer | What Is The Gospel"
                    },
                    {
                        name: 'description',
                        content: 'The Gospel of Jesus Christ'
                    },
                    {
                        name: 'keywords',
                        content: 'Gospel,Jesus,Christ,Good News,Gospel of Jesus Christ,Bible,Christian'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/what-is-the-gospel'
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
            <Grid container sx={{ width: { xs: '90%', md: '60%', lg: '80%' }, margin: '0 auto', pt: 8 }}>
                <Grid item xs={12} md={12} lg={9} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h4'>What Is The Gospel?</Typography>
                    <Typography variant='body1' sx={{ fontStyle: 'italic', pt: 2 }}>
                        "The gospel is called the 'good news' because it addresses the most serious problem that you and I have as human beings, and that problem is simply this: God is holy and He is just, and I'm not. And at the end of my life, I'm going to stand before a just and holy God, and I'll be judged. And I'll be judged either on the basis of my own righteousness–or lack of it–or the righteousness of another. The good news of the gospel is that Jesus lived a life of perfect righteousness, of perfect obedience to God, not for His own well being but for His people. He has done for me what I couldn't possibly do for myself. But not only has He lived that life of perfect obedience, He offered Himself as a perfect sacrifice to satisfy the justice and the righteousness of God."
                    </Typography>
                    <Typography variant='body1' sx={{ pt: 1 }}>
                        - R.C. Sproul
                    </Typography>
                    <Typography variant='body1' sx={{ fontStyle: 'italic', pt: 4 }}>
                        "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised Him from the dead, you will be saved."
                    </Typography>
                    <Typography variant='body1' sx={{ pt: 1 }}>
                        - Romans 10:9 ESV
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={3} sx={{ pt: { lg: 0, md: 4, xs: 4 } }}>
                    <Stack sx={{ pl: { lg: 4, md: 0, xs: 0 } }}>
                        <Typography variant='h6'>Resources</Typography>
                        <ul>
                            <li><Link href='https://www.youtube.com/watch?v=zWizZ53RFVw' target='_blank' rel='noopener'>What Is The Gospel?</Link></li>
                            <li><Link href='https://www.esv.org/John+1/' target='_blank' rel='noopener'>The Gospel of John</Link></li>
                            <li><Link href='https://www.9marks.org/church-search/' target='_blank' rel='noopener'>Find A Church Near Me</Link></li>
                            <li><Link href='https://www.amazon.com/What-Did-You-Expect-Redesign/dp/143354945X' target='_blank' rel='noopener'>Marriage Counseling</Link></li>
                            <li><Link href='https://www.facebook.com/profile.php?id=100083528617949' target='_blank' rel='noopener'>Legal Counseling</Link></li>
                        </ul>
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{ pt: 10, textAlign: 'center' }}>
                    <Typography variant='h4'>Gospel Justice Tracts</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                    <Carousel
                        animation='slide'
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
            <Box
                sx={{
                    width: {
                        md: '80%',
                        xs: '90%'
                    },
                    m: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    py: 5
                }}
            >
                <Document file={assuranceForEternity} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <Box
                    className='pagination'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: '12%',
                        left: '50%',
                        opacity: { lg: 0, md: 0, sm: 1, xs: 1 },
                        background: 'white',
                        color: 'black',
                        transform: 'translate(-50%)',
                        transition: 'opacity ease-in-out .2s',
                        borderRadius: '4px',
                        boxShadow: 'rgba(16, 36, 94, 0.2) 0px 30px 40px 0px',
                        zIndex: 2,
                        '&:hover': {
                            opacity: 1
                        }
                    }}
                >
                    <IconButton disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber => pageNumber - 1)}>
                        <NavigateBeforeIcon sx={{ color: 'grey' }} />
                    </IconButton>
                    <Typography sx={{ px: 1 }}>{pageNumber} of {numPages}</Typography>
                    <IconButton disabled={pageNumber === numPages} onClick={() => setPageNumber(pageNumber => pageNumber + 1)}>
                        <NavigateNextIcon sx={{ color: 'grey' }} />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};
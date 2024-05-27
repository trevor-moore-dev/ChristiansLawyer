import {
    Grid,
    Stack,
    Box,
    Link,
    Typography
} from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import Document from './document';
import styles from './page.module.css';
import assuranceForEternity from '../../../public/assurance-for-eternity.pdf';

export const metadata = {
    title: 'Christians Lawyer | What Is The Gospel',
    description: 'The Gospel of Jesus Christ',
    keywords: ['Gospel','Jesus','Christ','Jesus Christ','Christ Jesus','Good News','Gospel of Jesus Christ','Bible','Christian'],
    alternates: {
        canonical: 'https://www.christianslawyer.org/what-is-the-gospel'
    }
}

export default function Gospel() {
    return (
        <>
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
                <Image
                    priority
                    src='/golgotha.png'
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
                            <Image src='/english-tract-1.jpg' className={styles.contain} alt='Engish Gospel Tract page 1' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-2.jpg' className={styles.contain} alt='Engish Gospel Tract page 2' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-3.jpg' className={styles.contain} alt='Engish Gospel Tract page 3' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-4.jpg' className={styles.contain} alt='Engish Gospel Tract page 4' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-5.jpg' className={styles.contain} alt='Engish Gospel Tract page 5' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-6.jpg' className={styles.contain} alt='Engish Gospel Tract page 6' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-7.jpg' className={styles.contain} alt='Engish Gospel Tract page 7' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-8.jpg' className={styles.contain} alt='Engish Gospel Tract page 8' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-9.jpg' className={styles.contain} alt='Engish Gospel Tract page 9' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-10.jpg' className={styles.contain} alt='Engish Gospel Tract page 10' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/english-tract-11.jpg' className={styles.contain} alt='Engish Gospel Tract page 11' />
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
                            <Image src='/spanish-tract-1.jpg' className={styles.contain} alt='Spanish Gospel Tract page 1' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-2.jpg' className={styles.contain} alt='Spanish Gospel Tract page 2' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-3.jpg' className={styles.contain} alt='Spanish Gospel Tract page 3' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-4.jpg' className={styles.contain} alt='Spanish Gospel Tract page 4' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-5.jpg' className={styles.contain} alt='Spanish Gospel Tract page 5' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-6.jpg' className={styles.contain} alt='Spanish Gospel Tract page 6' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-7.jpg' className={styles.contain} alt='Spanish Gospel Tract page 7' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-8.jpg' className={styles.contain} alt='Spanish Gospel Tract page 8' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-9.jpg' className={styles.contain} alt='Spanish Gospel Tract page 9' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-10.jpg' className={styles.contain} alt='Spanish Gospel Tract page 10' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/spanish-tract-11.jpg' className={styles.contain} alt='Spanish Gospel Tract page 11' />
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
                <Document file={assuranceForEternity} />
            </Box>
        </>
    );
}
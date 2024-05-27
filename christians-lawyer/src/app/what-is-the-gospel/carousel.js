'use client';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from './page.module.css';

function EnglishCarousel() {
    return (
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
    );
}

function SpanishCarousel() {
    return (
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
    );
}

export { EnglishCarousel, SpanishCarousel };
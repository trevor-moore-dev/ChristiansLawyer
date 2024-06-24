'use client';
import { CSSProperties } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import englishTract1 from '../../../public/english-tract-1.jpg';
import englishTract2 from '../../../public/english-tract-2.jpg';
import englishTract3 from '../../../public/english-tract-3.jpg';
import englishTract4 from '../../../public/english-tract-4.jpg';
import englishTract5 from '../../../public/english-tract-5.jpg';
import englishTract6 from '../../../public/english-tract-6.jpg';
import englishTract7 from '../../../public/english-tract-7.jpg';
import englishTract8 from '../../../public/english-tract-8.jpg';
import englishTract9 from '../../../public/english-tract-9.jpg';
import englishTract10 from '../../../public/english-tract-10.jpg';
import englishTract11 from '../../../public/english-tract-11.jpg';
import spanishTract1 from '../../../public/spanish-tract-1.jpg';
import spanishTract2 from '../../../public/spanish-tract-2.jpg';
import spanishTract3 from '../../../public/spanish-tract-3.jpg';
import spanishTract4 from '../../../public/spanish-tract-4.jpg';
import spanishTract5 from '../../../public/spanish-tract-5.jpg';
import spanishTract6 from '../../../public/spanish-tract-6.jpg';
import spanishTract7 from '../../../public/spanish-tract-7.jpg';
import spanishTract8 from '../../../public/spanish-tract-8.jpg';
import spanishTract9 from '../../../public/spanish-tract-9.jpg';
import spanishTract10 from '../../../public/spanish-tract-10.jpg';
import spanishTract11 from '../../../public/spanish-tract-11.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function EnglishCarousel() {
    return (
        <Swiper
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            style={{
                '--swiper-navigation-color': '#808080',
                '--swiper-pagination-color': '#808080'
            } as CSSProperties}
        >
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract1} className='contain' alt='Engish Gospel Tract page 1' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract2} className='contain' alt='Engish Gospel Tract page 2' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract3} className='contain' alt='Engish Gospel Tract page 3' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract4} className='contain' alt='Engish Gospel Tract page 4' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract5} className='contain' alt='Engish Gospel Tract page 5' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract6} className='contain' alt='Engish Gospel Tract page 6' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract7} className='contain' alt='Engish Gospel Tract page 7' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract8} className='contain' alt='Engish Gospel Tract page 8' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract9} className='contain' alt='Engish Gospel Tract page 9' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract10} className='contain' alt='Engish Gospel Tract page 10' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={englishTract11} className='contain' alt='Engish Gospel Tract page 11' />
                </Box>
            </SwiperSlide>
        </Swiper>
    );
}

function SpanishCarousel() {
    return (
        <Swiper
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            style={{
                '--swiper-navigation-color': '#808080',
                '--swiper-pagination-color': '#808080'
            } as CSSProperties}
        >
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract1} className='contain' alt='Spanish Gospel Tract page 1' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract2} className='contain' alt='Spanish Gospel Tract page 2' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract3} className='contain' alt='Spanish Gospel Tract page 3' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract4} className='contain' alt='Spanish Gospel Tract page 4' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract5} className='contain' alt='Spanish Gospel Tract page 5' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract6} className='contain' alt='Spanish Gospel Tract page 6' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract7} className='contain' alt='Spanish Gospel Tract page 7' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract8} className='contain' alt='Spanish Gospel Tract page 8' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract9} className='contain' alt='Spanish Gospel Tract page 9' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract10} className='contain' alt='Spanish Gospel Tract page 10' />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={spanishTract11} className='contain' alt='Spanish Gospel Tract page 11' />
                </Box>
            </SwiperSlide>
        </Swiper>
    );
}

export { EnglishCarousel, SpanishCarousel };
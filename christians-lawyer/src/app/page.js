import {
  Button,
  Typography,
  Box
} from '@mui/material';
import Image from 'next/image';
import background from '../../public/background.png';

export const metadata = {
    title: 'Christians Lawyer | Legal Aid',
    description: 'Christian Attorney offering free legal aid',
    keywords: ['Lawyer','Attorney','Legal Aid','Legal Help','Christian Lawyer','Christian Attorney','Christian','Christ','Gospel','Justice','Phoenix','Phoenix Arizona','Arizona'],
    alternates: {
        canonical: 'https://www.christianslawyer.org/'
    }
}

export default function Home() {
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
                    src={background}
                    alt='Christian Lawyer'
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
}
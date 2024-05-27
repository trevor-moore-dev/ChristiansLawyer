import dynamic from 'next/dynamic';
import {
    Grid,
    Typography,
    Link
} from '@mui/material/Grid';

const MapContainer = dynamic(() => import('react-leaflet/MapContainer').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet/TileLayer').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet/Marker').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet/Popup').then((mod) => mod.Popup), { ssr: false });

export const metadata = {
    title: 'Christians Lawyer | Contact Us',
    description: 'Contact a Christian Lawyer for free legal aid',
    keywords: ['Lawyer','Attorney','Legal Aid','Legal Help','Christian Lawyer','Christian Attorney','Christian','Christ','Gospel','Justice','Phoenix','Phoenix Arizona','Arizona'],
    alternates: {
        canonical: 'https://www.christianslawyer.org/contact-us'
    }
};

export default function Contact() {
    return (
        <Grid container sx={{ pt: 6, pb: 6, width: { md: '80%', xs: '90%' }, margin: '0 auto' }}>
            <Grid item xs={12} md={6}>
                <Typography variant='h1' sx={{ pb: 3, fontSize: '2rem', textAlign: 'center' }}>
                    Contact Us
                </Typography>
                <Typography sx={{ py: 1, pr: 2 }}>
                    Email us for a referral to a Christian Lawyer via <Link href='mailto:hope@christianslawyer.org'>hope@christianslawyer.org</Link>
                </Typography>
                <Typography sx={{ py: 1, pr: 2 }}>
                    We believe that a lawyer can be a Christian that serves everyone for God's glory and their clients' good (Romans 8:28-29).
                </Typography>
                <Typography sx={{ py: 1, pr: 2 }}>
                    <i>Christians Lawyer</i> is based in Arizona.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <MapContainer center={[33.4504393, -112.081053]} zoom={10} scrollWheelZoom={false} style={{ height: '500px' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[33.4504393, -112.081053]}>
                        <Popup>
                            <b>Christians Lawyer</b><br />Phoenix, AZ
                        </Popup>
                    </Marker>
                </MapContainer>
            </Grid>
        </Grid>
    );
};
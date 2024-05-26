import React from "react";
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const MapContainer = loadable(() => import('react-leaflet/MapContainer'), { ssr: false, resolveComponent: (components) => components.MapContainer });
const TileLayer = loadable(() => import('react-leaflet/TileLayer'), { ssr: false, resolveComponent: (components) => components.TileLayer });
const Marker = loadable(() => import('react-leaflet/Marker'), { ssr: false, resolveComponent: (components) => components.Marker });
const Popup = loadable(() => import('react-leaflet/Popup'), { ssr: false, resolveComponent: (components) => components.Popup });

export default function Contact() {
    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christians Lawyer | Contact Us"
                meta={[
                    {
                        name: 'title',
                        content: "Christians Lawyer | Contact Us"
                    },
                    {
                        name: 'description',
                        content: 'Contact a Christian Lawyer for free legal aid'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice,Phoenix,Phoenix Arizona,Arizona'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/contact-us'
                    }
                ]}
            />
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
        </>
    );
};
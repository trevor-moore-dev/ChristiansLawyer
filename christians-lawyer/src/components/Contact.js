import React from "react";
import { Helmet } from 'react-helmet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

export default function Contact() {
    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christian’s Lawyer | Contact Us"
                meta={[
                    {
                        name: 'title',
                        content: "Christian’s Lawyer | Contact Us"
                    },
                    {
                        name: 'description',
                        content: 'Contact a Christian Lawyer for legal aid in Phoenix, Arizona'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
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
                        <i>Christian's Lawyer</i> is based in Arizona.
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
                                Christian's Lawyer <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Grid>
            </Grid>
        </>
    );
};
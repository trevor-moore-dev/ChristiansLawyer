'use client';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
    useEffect(() => {
        async function loadMap() {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');
            const map = new Map(document.getElementById('map'), {
                zoom: 10,
                mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
                center: {
                    lat: 33.4504393,
                    lng: -112.081053
                },
            });

            const { AdvancedMarkerElement } = await loader.importLibrary('marker');
            const marker = new AdvancedMarkerElement({
                map,
                title: 'Christians Lawyer',
                position: {
                    lat: 33.4504393,
                    lng: -112.081053
                }
            });
        }
        loadMap();
    }, []);

    return (<Box id='map' sx={{ height: '500px' }} />);
}
'use client';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet/MapContainer').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet/TileLayer').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet/Marker').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet/Popup').then((mod) => mod.Popup), { ssr: false });

export default function Map() {
    return (
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
    );   
}
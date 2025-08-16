'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const center = { lat: 48.8566, lng: 2.3522 }; // Paris coordinates
const containerStyle = { width: '100%', height: '400px' }; // fixed height

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAbVYvnI7k0vn6BriOP1Hx6TcdvOwnNzsY',
  });

  if (loadError) return <div>Erreur de chargement de la carte</div>;
  if (!isLoaded)
    return (
      <div className="h-96 w-full bg-gray-100 flex items-center justify-center">
        Chargement de la carte...
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={{
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

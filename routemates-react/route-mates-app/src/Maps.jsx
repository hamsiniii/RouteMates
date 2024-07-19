import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = (props) => {
  const mapStyles = {
    height: '60vh',
    width: '100%',
  };

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  const defaultCenter = currentLocation || {
    lat: -3.745,
    lng: -38.523,
  };

  const hardcodedLocations = [
    { lat: 12.9422, lng: 77.5045, label: 'BMSCE' },
    { lat: 12.9360, lng: 77.5375, label: 'PESU-RR' },
    { lat: 12.861712978867079, lng: 77.66475101025148, label: 'PESU-EC' },
    { lat: 12.9507, lng: 77.5577, label: 'RVCE' },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCn20Yq_T-zkTEs2lJsKz6rM8G3qu4oKSk">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {currentLocation && <Marker position={currentLocation} label="You" />}
        {hardcodedLocations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;

"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

export const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    });

    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState<any>(null);
    const [selectedMarker, setSelectedMarker] = useState<any>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude,
                });
            });
        }
    }, []);

    const onLoad = useCallback(function callback(map) {
        setMap(map);
        if (currentPosition) {
            map.setCenter(currentPosition);
            map.setZoom(15);
        }
    }, [currentPosition]);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);


    const petMonchisPosition = { lat: 10.003761814117052, lng: -84.15617781041564 };

    return isLoaded && currentPosition ? (
        <GoogleMap
            mapContainerClassName='w-full h-full rounded-lg min-h-[90vh]'
            center={currentPosition}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true, // Disable default UI elements like map controls
                zoomControl: true, // Keep zoom control
                styles: [
                    {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{ visibility: "off" }]
                    },
                    {
                        featureType: "transit",
                        elementType: "labels",
                        stylers: [{ visibility: "off" }]
                    },
                ],
            }}
        >
            <Marker
                position={petMonchisPosition}
                onMouseOver={() => setSelectedMarker(petMonchisPosition)}
            />
            {selectedMarker && (
                <InfoWindow
                    position={selectedMarker}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <div>
                        <h3>Pet Monchis</h3>
                        <p>This is Pet Monchis location.</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    ) : <></>;
}

export default React.memo(Map);

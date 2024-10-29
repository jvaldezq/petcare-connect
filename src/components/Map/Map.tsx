"use client";

import React, {useState, useEffect, useCallback} from 'react';
import {GoogleMap, useJsApiLoader, Marker, InfoWindow} from '@react-google-maps/api';
import {Vet} from "@/lib/definitions";

interface MapProps {
    vets: Vet[];
}

export const Map = (props: MapProps) => {
    const {vets} = props;
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script', googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    });
    // console.log('Map Data', vets);

    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState<any>(null);
    const [selectedMarker, setSelectedMarker] = useState<Vet | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                setCurrentPosition({
                    lat: latitude, lng: longitude,
                });
            });
        }
    }, []);

    const onLoad = useCallback(function callback(map: any) {
        setMap(map);
        if (currentPosition) {
            map.setCenter(currentPosition);
            map.setZoom(15);
        }
    }, [currentPosition]);

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null);
    }, []);

    return isLoaded && currentPosition ? (<GoogleMap
            mapContainerClassName='w-full h-full rounded-lg min-h-[90vh]'
            center={currentPosition}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true, // Disable default UI elements like map controls
                zoomControl: true, // Keep zoom control
                styles: [{
                    featureType: "poi", elementType: "labels", stylers: [{visibility: "off"}]
                }, {
                    featureType: "transit", elementType: "labels", stylers: [{visibility: "off"}]
                },],
            }}
        >
            {vets?.map((vet) => (<>
                    <Marker
                        key={vet?.id}
                        position={{
                            lat: parseFloat(vet?.location?.latitude), lng: parseFloat(vet?.location?.longitude)
                        }}
                        onMouseOver={() => setSelectedMarker(vet)}
                    />
                </>))}
        {selectedMarker && (<InfoWindow
            position={{
                lat: parseFloat(selectedMarker?.location?.latitude), lng: parseFloat(selectedMarker?.location?.longitude)
            }}
            onCloseClick={() => setSelectedMarker(null)}
        >
            <div>
                <h3>{selectedMarker.name}</h3>
                <p>{selectedMarker.phone}</p>
            </div>
        </InfoWindow>)}
        </GoogleMap>) : <></>;
}

export default React.memo(Map);

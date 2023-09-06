'use client';

import { useState } from 'react'
import getCoords from '@/helperFns/getCoords';
import { MapContainer, Popup, Marker, ZoomControl } from 'react-leaflet'

interface IinitViewState {
    longitude: number,
    latitude: number,
    zoom: number,
    pitch: number,
    bearing: number
}

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
]

export default function TrackAreaMap({ location }: { location:string }){
    return(
        <MapContainer className="w-full h-[50vh]" zoomControl={false} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <Marker position={[51.505, -0.09]}>
                <Popup>
                {location}
                </Popup>
            </Marker>
            <ZoomControl position='bottomright' />
        </MapContainer>
    )
}
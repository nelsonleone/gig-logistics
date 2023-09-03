'use client';

import GoogleMapReact from 'google-map-react';


export default function TrackerArea(){
    return(
        <div className="h-[50vh] w-full">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{lat:10.99835602,lng:77.0150262}}
                defaultZoom={10}
            />
        </div>
    )
}
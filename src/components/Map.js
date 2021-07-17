import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useRef, useState } from "react";
import './Map.css'

export default function Map() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ6eSIsImEiOiJja284d25iODAyNm1oMnJtYjVnZmllaG1zIn0.P8siHAbm84-8l4B0b723qg';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
 

  
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <>
        <div ref={mapContainer} className="map-container" ></div>
        </>
    )
}

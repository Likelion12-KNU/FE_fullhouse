import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

/**
 * 구현 중임 아주 화남 매우 화남
 * @returns 성질머리
 */
function MapFinder() {
    const [info, setInfo] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState(null);

    const kakaoApiKey = import.meta.env.VITE_KAKAOMAP_API;

    useEffect(() => {
        if (!map) return;

        const script = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&libraries=services`;
        document.head.appendChild(script);

        script.onload = () => {
            const ps = new window.kakao.maps.services.Places();

            ps.keywordSearch("강대 맛집", (data, status, _pagination) => {
                if (status === kakao.maps.services.Status.OK) {
                    const bounds = new kakao.maps.LatLngBounds();
                    const newMarkers = data.map(place => ({
                        position: {
                            lat: place.y,
                            lng: place.x,
                        },
                        content: place.place_name,
                    }));

                    newMarkers.forEach(marker => {
                        bounds.extend(new kakao.maps.LatLng(marker.position.lat, marker.position.lng));
                    });

                    setMarkers(newMarkers);
                    map.setBounds(bounds);
                }
            });
        };
    }, [map, kakaoApiKey]);

    return (
        <Map
            center={{
                lat: 37.566826,
                lng: 126.9786567,
            }}
            style={{
                width: "100%",
                height: "350px",
            }}
            level={3}
            onCreate={setMap}
        >
            {markers.map(marker => (
                <MapMarker
                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                    position={marker.position}
                    onClick={() => setInfo(marker)}
                >
                    {info && info.content === marker.content && (
                        <div style={{ color: "#000" }}>{marker.content}</div>
                    )}
                </MapMarker>
            ))}
        </Map>
    );
}

export default MapFinder;
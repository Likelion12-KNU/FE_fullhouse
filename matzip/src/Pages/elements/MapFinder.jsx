import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

/**
 * PostForm > MapFinder
 * 지도 검색 기능
 * @returns 성질머리
 */
function MapFinder() {
    const [info, setInfo] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState(null);

    const kakaoApiKey = import.meta.env.VITE_KAKAOMAP_API;

    useEffect(() => {
        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch("강대 맛집", (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
                let markers = []

                for (var i = 0; i < data.length; i++) {
                    // @ts-ignore
                    markers.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        content: data[i].place_name
                    })
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }
                setMarkers(markers)

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds)
            }
        })
    }, [map]);

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
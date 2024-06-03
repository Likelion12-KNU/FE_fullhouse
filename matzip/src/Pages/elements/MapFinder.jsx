import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

/**
 * PostForm > MapFinder
 * 지도 검색 기능
 */
function MapFinder() {
    const [info, setInfo] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState(null);
    const [keyword, setKeyword] = useState("강대 맛집");
    const [select, setSelect] = useState("강원대학교");
    const [latlng, setLatlng] = useState([37.86945254603451, 127.74403884881542]);

    useEffect(() => {
        const ps = new window.kakao.maps.services.Places(); // 검색 객체

        ps.keywordSearch(keyword, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
                let markers = []

                data.forEach(place => {
                    markers.push({
                        position: {
                            lat: place.y,
                            lng: place.x,
                        },
                        content: place.place_name
                    });
                    bounds.extend(new kakao.maps.LatLng(place.y, place.x));
                });

                setMarkers(markers);
                map.setBounds(bounds);
            } else {
                console.error('Error:', status);
            }
        })
    }, [map, keyword]);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event);
        const newKeyword = event.target.keyword.value;
        setKeyword(newKeyword);
    };

    const handleMarkerClick = (marker) => {
        console.log('가게 이름:', marker.content);
        console.log('위치:', marker.position.lat, marker.position.lng);
        setSelect(marker.content);
        setLatlng([marker.position.lat, marker.position.lng]);
        // console.log('주소:', marker);
        setInfo(marker);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    name="keyword"
                    className="keyword"
                    placeholder="검색"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            <Map
                center={{
                    lat: 37.566826,
                    lng: 126.9786567,
                }}
                style={{                // 스타일 따로 설정해줘야 함
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
                        onClick={() => handleMarkerClick(marker)}
                    >
                        {info && info.content === marker.content && (
                            <div style={{ color: "#000" }}>{marker.content}</div>
                        )}
                    </MapMarker>
                ))}
            </Map>
        </>
    );
}

export default MapFinder;
import React, { useState, useEffect } from 'react';
import style from '../../style/Post.module.css';
import { baseUrl } from "../../config/const";
import { getPosts } from "../../func/request";
import EditForm from "./EditForm";
import editimg from '../../img/edit.png'
import delimg from "../../img/delete.png"
import likeimg from "../../img/like_empty.png"
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// content -> contents - by choigw
function Post({ id, title, contents, likes, /*placename, */pos }) {
    const [stateLike, setStateLike] = useState(likes);
    const [isEditing, setEditing] = useState(false);
    const [map, setMap] = useState(null);
    const [address, setAddress] = useState('');
    const point = pos;

    useEffect(() => {
        // reverse-Geocoding
        const geocoder = new window.kakao.maps.services.Geocoder();
        const coord = new window.kakao.maps.LatLng(point[0], point[1]);
        const callback = (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setAddress(result[0].address.address_name);
            }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }, [point]);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCloseForm = () => {
        setEditing(false);
    }

    const handleDelete = () => {
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }).then(() => getPosts());
    };

    const handleLike = () => {
        setStateLike((prev) => prev + 1);
        fetch(`${baseUrl}/likes/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        }).then(() => getPosts());
    }


    return (
        <div className={style.post}>
            {isEditing ? (
                <EditForm
                    id={id}
                    curtitle={title}
                    curcontents={contents}
                    curpos={pos}
                    onClose={handleCloseForm}
                />
            ) : (
                <>
                    <h2 className={style.posth2}>{title}</h2>
                    <p className='contents'>{contents}</p>
                    <button
                        className={style.l}
                        onClick={handleLike}
                    >
                        <img src={likeimg} className={style.likeIcon} />
                    </button>
                    <span> {stateLike} likes</span>
                    <div className='map_wrap'>
                        {/* <h3>{placename}</h3>*/}
                        <p className='address'>{address}</p>
                        <Map
                            center={{
                                lat: point[0],
                                lng: point[1]
                            }}
                            style={{                // 스타일 따로 설정해줘야 함
                                width: "100%",
                                height: "150px",
                            }}
                            level={3}
                            draggable={false}
                            onCreate={setMap}
                        >
                            <MapMarker // 마커를 생성합니다
                                position={{
                                    lat: point[0],
                                    lng: point[1]
                                }}
                            />
                        </Map>
                    </div>
                    <CommentList/>
                    <CommentForm/>
                    <div className={style.edit}>
                        <button
                            className={style.e}
                            onClick={handleEdit}
                        >
                            <img src={editimg} />
                        </button>
                        <button
                            className={style.d}
                            onClick={handleDelete}
                        >
                            <img src={delimg} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
export default Post;
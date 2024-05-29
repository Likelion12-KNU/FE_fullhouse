import React from 'react';
import style from '../../style/Post.module.css';
// import { baseUrl } from "../../../config/const";

// del 여기 구현
function Post({ title, content }) {
    return (
        <div className={style.post}>
            {/* <img src=''></img> */}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
export default Post;

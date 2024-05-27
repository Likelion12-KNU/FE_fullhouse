import React from 'react';
import '../../style/Post.css';
// import { baseUrl } from "../../../config/const";

// del 여기 구현
function Post({ title, content }) {
    return (
        <div className='post'>
            {/* <img src=''></img> */}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
export default Post;

import React from 'react'
import '../style/Post.css'

function Post(props) {
    return (
        <div className='post'>
            <div>
                <h2>{props.title}</h2>
                {/* <img src={props.src} /> */}
                <li>
                    {props.article}
                </li>
            </div>
            <p />
            좋아요: 5
            <br />
            댓글 5개
        </div>
    )
}

export default Post;

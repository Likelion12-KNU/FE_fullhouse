import React from 'react'
import '../style/Post.css'

function Post({ title, content }) {
    return (
        <div className='post'>
            <div>
                <img
                    src='../public/bread.gif' />
                <li>
                    포스트입니다. 테스트 테스트.
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

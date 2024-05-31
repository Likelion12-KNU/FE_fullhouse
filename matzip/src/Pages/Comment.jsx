import React from 'react';

function Comment({ comment }) {
    return (
        <div className="comment">
            <p>{comment.text}</p>
            <p>작성자: {comment.author}</p>
        </div>
    );
}

export default Comment;

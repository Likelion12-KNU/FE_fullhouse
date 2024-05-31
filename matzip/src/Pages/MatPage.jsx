import React, { useState } from 'react';
import PostForm from './elements/PostForm';
import PostList from './elements/PostList';
import Comment from './Comment'; // Comment 컴포넌트 불러오기

function MatPage() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ text: '', author: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment({ text: '', author: '' });
    }

    return (
        <>
            <PostForm />
            <PostList />
            <hr />
            <h2>댓글</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>댓글 내용:</label>
                    <input type="text" name="text" value={newComment.text} onChange={handleChange} />
                </div>
                <div>
                    <label>작성자:</label>
                    <input type="text" name="author" value={newComment.author} onChange={handleChange} />
                </div>
                <button type="submit">댓글 추가</button>
            </form>
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} /> // Comment 컴포넌트 사용
            ))}
        </>
    );
}

export default MatPage;

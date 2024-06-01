import React from 'react';
import PostForm from './elements/PostForm';
import EditForm from './elements/EditForm';
import Post from './elements/Post';
import PostList from './elements/PostList';

function MatPage() {
    return (
        <>
        {/* <h1>맛집 게시판 페이지 입니다.</h1> */}
            <PostForm />
            <PostList />
        </>
    );
}
export default MatPage
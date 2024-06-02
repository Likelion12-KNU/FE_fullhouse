import React from 'react';
import PostForm from './elements/PostForm';
import EditForm from './elements/EditForm';
import Post from './elements/Post';
import PostList from './elements/PostList';
import style from "../style/MatPage.module.css"

function MatPage() {
    return (
        <>
        {/* <h1>맛집 게시판 페이지 입니다.</h1> */}
            <PostForm />
            <h1 className={style.h1}>mat.zip</h1>
            <PostList />
        </>
    );
}
export default MatPage
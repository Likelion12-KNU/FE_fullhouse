import React, { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { postsAtom } from '../state/atom';
import Post from './elements/Post';
import "../style/HomePage.css";
import { getPosts } from "../func/request";

function HomePage() {
    const posts = useAtomValue(postsAtom);

    useEffect(() => { 
        getPosts(); 
    }, []);

    const recentPosts = (posts.boardLists || [])
        .slice(-10)  // 끝에서부터 10개의 포스트를 추출
        .reverse();  // 역순으로 정렬

    return (
        <div className="homepage">
            <h1 className='h1'>Recent Posts</h1>
            <div className="posts">
                {recentPosts.map((post, index) => (
                    <Post key={index} id={post.id} title={post.title} contents={post.contents} className="post" pos={[post.coordinate.latitude, post.coordinate.longitude]} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;

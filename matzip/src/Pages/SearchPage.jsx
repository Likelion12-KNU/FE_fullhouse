import React, { useState, useEffect } from 'react';
import style from '../style/SearchPage.module.css';
import { useAtomValue } from 'jotai';
import { postsAtom } from '../state/atom';
import SearchPostList from './elements/SearchPostList.jsx';

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [h1Content, setH1Content] = useState("ALL POSTS");
    const posts = useAtomValue(postsAtom);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredPosts(posts.boardLists || []);
            setH1Content("ALL POSTS");
        } else {
            setFilteredPosts(
                (posts.boardLists || []).filter(
                    post =>
                        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.contents.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            setH1Content("Search Result");
        }
    }, [searchTerm, posts]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form className={style.searchform} onSubmit={handleSubmit}>
                <div className={style.searchcover}>
                    <input 
                        type='text' 
                        placeholder='Search...' 
                        className={style.search} 
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <input type='submit' value="" className={style.sub} />
            </form>
            <h1 className={style.h1}>{h1Content}</h1>
            <SearchPostList posts={filteredPosts} />
        </>
    );
}

export default SearchPage;
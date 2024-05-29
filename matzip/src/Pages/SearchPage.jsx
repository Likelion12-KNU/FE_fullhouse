import React from 'react';
import style from '../style/SearchPage.module.css'

function SearchPage() {
    return (
        <>
        <h1>검색 페이지 입니다.</h1>
        <form>
            <input type='text' placeholder='Search...'></input>
            <input type='submit' value={""}></input>
        </form>
        </>
    );
}
export default SearchPage
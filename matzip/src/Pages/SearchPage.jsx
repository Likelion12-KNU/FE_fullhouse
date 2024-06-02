import React from 'react';
import style from '../style/SearchPage.module.css'

function SearchPage() {
    return (
        <>
        <form className={style.searchform}>
            <div className={style.searchcover}>
                <input type='text' placeholder='Search...' className={style.search}/>
            </div>
            <input type='submit' value={""} className={style.sub}></input>
        </form>
        <h1 className={style.h1}>Search Result</h1>
        </>
    );
}
export default SearchPage
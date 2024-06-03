import React from 'react';
import style from '../style/SajangPage.module.css'
import SajangPostList from './elements/SajangPostList';

function SajangPage() {
    return (
        <>
        <h1 className={style.h1}>mat.zip</h1>
        <SajangPostList/>
        </>
    );
}
export default SajangPage
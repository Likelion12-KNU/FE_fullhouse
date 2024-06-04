import React from "react";
import Comment from "./Comment";
import style from "../../style/CommentList.module.css"

function CommentList() {
    return (
        <div className={style.coLi}>
        <Comment content="댓글1"/>
        <Comment content="댓글2"/>
        <Comment content="댓글1"/>
        <Comment content="댓글2"/>
        <Comment content="댓글1"/>
        <Comment content="댓글2"/>
        </div>
    );
}

export default CommentList
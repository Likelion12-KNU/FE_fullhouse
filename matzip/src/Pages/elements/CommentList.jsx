import Comment from "./Comment";
import React, { useEffect } from "react";
import { useAtomValue } from "jotai";
import { postsAtom } from "../../state/atom";
import { getPosts } from "../../func/request";
import style from "../../style/CommentList.module.css"
//import Comment from "./Comment.jsx";

function CommentList() {
    return (
        <div className="commentCover">
        <Comment content="댓글1"/>
        <Comment content="댓글2"/>
        <Comment content="댓글1"/>
        <Comment content="댓글2"/>
        <Comment content="댓글1"/>
        <Comment content="댓글2"/>
        </div>
    );
}

export default CommentList;

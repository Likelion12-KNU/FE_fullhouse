import React from "react";
import style from "../../style/Comment.module.css"

function Comment({content}) {
    return (
        <div className={style.co}>
            <p className={style.content}>{content}</p>
        </div>
    );
}

export default Comment

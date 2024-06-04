import React from "react";
import style from "../../style/Comment.module.css"

function Comment({contents}) {
    return (
        <div className={style.co}>
            <p className={style.content}>{contents}</p>
        </div>
    );
}

export default Comment
import React from "react";
import style from "../../style/CommentForm.module.css"
import sendimg from "../../img/send_empty.png"

function CommentForm() {
    return (
        <form className={style.form}>
        <input type="text" className={style.newComment}/>
        <button type="submit" className={style.newCommentSubmit}><img src={sendimg} className={style.sendImg}/></button>
        </form>
    );
}

export default CommentForm
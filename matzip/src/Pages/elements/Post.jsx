import React, { useState } from 'react';
import style from '../../style/Post.module.css';
import { baseUrl } from "../../config/const";
import { getPosts } from "../../func/request";
import EditForm from "./EditForm";
import editimg from '../../img/edit.png'
import delimg from "../../img/delete.png"
import likeimg from "../../img/like_empty.png"
import CommentList from './CommentList';
import CommentForm from './CommentForm';

// content -> contents - by choigw
function Post({ id, title, contents, likes }) {
    const [stateLike, setStateLike] = useState(likes);
    const [isEditing, setEditing] = useState(false);
    const handleEdit = () => {
        setEditing(true);
    };

    const handleCloseForm = () => {
        setEditing(false);
    }

    const handleDelete = () => {
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }).then(() => getPosts());
    };

    const handleLike = () => {
        setStateLike((prev) => prev + 1);
        fetch(`${baseUrl}/likes/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        }).then(() => getPosts());
    }


    return (
        <div className={style.post}>
            {isEditing ? (
                <EditForm
                    id={id}
                    curtitle={title}
                    curcontents={contents}
                    onClose={handleCloseForm}
                />
            ) : (
                <>
                    <h2 className={style.posth2}>{title}</h2>
                    <p className={style.postp}>{contents}</p>
                    <button
                        className={style.l}
                        onClick={handleLike}
                    >
                        <img src={likeimg} className={style.likeIcon}/>
                    </button>
                    <span> {stateLike} likes</span>
                    <CommentList/>
                    <CommentForm/>
                    <div className={style.edit}>
                        <button
                            className={style.e}
                            onClick={handleEdit}
                        >
                            <img src={editimg} />
                        </button>
                        <button
                            className={style.d}
                            onClick={handleDelete}
                        >
                            <img src={delimg} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
export default Post;
import React, { useState } from 'react';
import style from '../../style/Post.module.css';
import { baseUrl } from "../../config/const";
import { getPosts } from "../../func/request";
import EditForm from "./EditForm";
import editimg from '../../img/edit.png'
import delimg from "../../img/delete.png"

// content -> contents - by choigw
function Post({ id, title, contents }) {
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
                    <h2>{title}</h2>
                    <p>{contents}</p>

                    <div className={style.edit}>
                        <button
                            className={style.e}
                            onClick={handleEdit}
                        >
                            <img src={editimg}/>
                        </button>
                        <button
                            className={style.d}
                            onClick={handleDelete}
                        >
                            <img src={delimg}/>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
export default Post;
import React, { useState } from 'react';
import '../../style/Post.css';
import { baseUrl } from "../../config/const";
import { getPosts } from "../../func/request";
import EditForm from "./EditForm";

// content -> contents - by choigw
function Post({ id, title, contents, likes }) {
    const [like, setLike] = useState(likes);
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
        setLike(like+1);
        console.log(id+" "+like);
        //PUT : like - back 미구현 240602
        // fetch(`${baseUrl}/${id}`, {
        //     method: "PUT",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         likes: like
        //     })
        // }).then(() => getPosts());
    }


    return (
        <div className='post'>
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

                    <div className="likes">
                        <button onClick={handleLike}>
                            좋아요
                        </button>
                        <span> {likes}개</span>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={handleEdit}>
                            수정
                        </button>
                        <button onClick={handleDelete}>
                            삭제
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
export default Post;

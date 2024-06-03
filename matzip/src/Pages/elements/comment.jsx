import React from "react";
import "../../style/Comment.css"

function Comment({content}) {
    return (
        <div className="co">
            <p className="content">{content}</p>
        </div>
    );
}

export default Comment
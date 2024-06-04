import React from "react";
import "../../style/Comment.css"

function Comment({contents}) {
    return (
        <div className="comment">
            <p className="content">{contents}</p>
        </div>
    );
}

export default Comment
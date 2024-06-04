import { baseUrl, query } from "../../config/const";
import { useState } from "react";
import { getPosts } from "../../func/request";
import "../../style/PostForm.css"

function EditForm({ id, curtitle, curcontents, curpos, onClose }) {
  // 상태 관리를 위한 useState 훅 사용
  const [title, setTitle] = useState(curtitle);
  const [contents, setContents] = useState(curcontents);
  const [latlng, setLatlng] = useState(curpos);

  // 폼 수정 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();

    // [PUT] ${baseUrl}/boards/${id}
    fetch(`${baseUrl}/boards/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          contents: contents,
          coordinate: {
            latitude: latlng[0],
            longitude: latlng[1]
          }
        })
      }
    ).then(() => {
      getPosts();
      onClose();
    });
  };

  return (
    <div className="editform">
      <form onSubmit={handleSubmit}>
        <div className="FormHeader">
          <label htmlFor="title">
            게시글 제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="FormBody">
          <label htmlFor="contents">
            게시글 내용
          </label>
          <textarea
            id="contents"
            name="contents"
            rows="4"
            placeholder="내용을 입력하세요"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            className="textEdit"
          ></textarea>
        </div>
        <div className="btn">
          <button type="submit">
            수정
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;

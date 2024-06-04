import { baseUrl, query } from "../../config/const";
import { useState } from "react";
import { getPosts } from "../../func/request";
import "../../style/PostForm.css"
import MapFinder from "./MapFinder";

function PostForm() {
  // 상태 관리를 위한 useState 훅 사용
  const [title, setTitle] = useState("");
  // 주의::content -> contents / setContent -> setContents - 240530 by choigw
  const [contents, setContents] = useState("");
  const [select, setSelect] = useState("강원대학교");
  const [latlng, setLatlng] = useState([37.86945254603451, 127.74403884881542]);

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    setContents("");

    // [POST] ${baseUrl}/posts
    fetch(`${baseUrl}`,
      {
        method: "POST",
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
    ).then(() => getPosts());
  };

  return (
    <div className="root">
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
            placeholder=" 제목을 입력하세요"
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
            className="text"
          ></textarea>
          <MapFinder
            setSelect={setSelect}
            setLatlng={setLatlng}
          />
        </div>
        <div className="btn">
          <button type="submit">
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;

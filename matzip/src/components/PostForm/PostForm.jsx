import { baseUrl } from "../../config/const";
import { useState } from "react";
import Post from "../PostList/Post/Post";
import { getPosts } from "../../func/request";

function PostForm() {
  // 상태 관리를 위한 useState 훅 사용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    setContent("");
    
    // [POST] ${baseUrl}/posts
    fetch(`${baseUrl}/posts`,
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: title,
          content: content
        })
      }
    ).then(() => getPosts());
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            게시글 제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            게시글 내용
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;

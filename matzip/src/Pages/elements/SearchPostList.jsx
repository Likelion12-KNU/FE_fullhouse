import Post from "./Post";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { postsAtom } from "../../state/atom";
import { getPosts } from "../../func/request";
import "../../style/PostList.css"

function SearchPostList({ posts }) {
  // 처음 랜더링 될때만 실행
  useEffect(() => { getPosts(); }, []);

  return (
    <div className="list">
      <div className="cover">
        {posts && posts.map((v, index) => (
          <Post key={index} id={v.id} title={v.title} contents={v.contents} className="post" />
        ))}
      </div>
    </div>
  );
}

export default SearchPostList;
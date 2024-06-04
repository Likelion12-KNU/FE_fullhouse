import Comment from "./Comment";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { postsAtom } from "../../state/atom";
import { getPosts } from "../../func/request";
import "../../style/PostList.css"

function CommentList() {
  /*
        { id: number, title: string, contents: string, like: number }
  */
  const posts = useAtomValue(postsAtom);

  // 처음 랜더링 될때만 실행
  useEffect(() => { getPosts(); }, []);

  return (
    <div className="clist">
      <div className="cover">
      {posts.boardLists.commentLists && posts.boardLists.commentLists.map((v, index) => (
        // content -> contents - by choigw
        <Comment key={index} className="comment" id={v.comment_id} contents={v.contents} />
      ))}
      </div>
    </div>
  );
}

export default CommentList;

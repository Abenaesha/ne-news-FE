import React from "react";
import CommentCard from "./cards/CommentCard";

function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </ul>
  );
}

export default CommentsList;

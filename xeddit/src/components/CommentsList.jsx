import React from "react";
import CommentCard from "./cards/CommentCard";

function CommentsList({ comments }) {
  return (
    <section className='comments-section'>
        <ul className='comments-list'>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
      </ul>
    </section>
    
  );
}

export default CommentsList;

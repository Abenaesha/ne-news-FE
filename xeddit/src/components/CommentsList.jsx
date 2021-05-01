import React from 'react';
import CommentCard from './cards/CommentCard';
import AddComment from './forms/AddComment';

function CommentsList({
	comments,
	article_id,
	addCommentToLocal,
	removeCommentFromLocal,
	showAddComment,
} ) {
	return (
		<section className='comments-box'>
			{showAddComment && (
				<AddComment
          article_id={article_id}
					addCommentToLocal={addCommentToLocal}
				/>
			)}
			<ul className='comments-list'>
				{comments.map((comment) => {
          return <CommentCard
            key={comment.comment_id}
            {...comment}
            removeCommentFromLocal={removeCommentFromLocal}/>;
				})}
			</ul>
		</section>
	);
}

export default CommentsList;

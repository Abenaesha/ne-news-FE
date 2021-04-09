import React from 'react';
import Delete from '../Delete';
import { UserContext } from '../UserContext';
import Votes from '../Votes';

function CommentCard(props) {
	const {
		created_at,
		author,
		body,
		votes,
		comment_id,
		removeCommentFromLocal,
	} = props;
	const date = new Date( created_at );
	
	const [user] = React.useContext(UserContext);
	const isAuthor = author === user;

	return (
		<li className='comment-card'>
			<div className='author'>
				<p className='body'>{body}</p>
				<h3>{author}</h3>
				<h4>{date.toLocaleString()}</h4>
			</div>
			{isAuthor ? (
				<Delete
					id={comment_id}
					type='comments'
					votes={votes}
					removeFunc={removeCommentFromLocal}
				/>
			) : (
				<Votes id={comment_id} votes={votes} type='comments' />
			)}
		</li>
	);
}

export default CommentCard;

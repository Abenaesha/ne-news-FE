import Votes from '../Votes';

function CommentCard( props ) {
  const { created_at, author, body, votes, comment_id } = props;
	const date = new Date(created_at);

	return (
		<li className='comment-card'>
			<div className='author'>
				<p className='body'>{body}</p>
				<h3>{author}</h3>
				<h4>{date.toLocaleString()}</h4>
			</div>
			<Votes id={comment_id} votes={votes} type='comments' />
		</li>
	);
}

export default CommentCard;

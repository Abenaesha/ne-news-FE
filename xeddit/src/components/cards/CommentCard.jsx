import React from 'react'
import Delete from '../Delete'
import {UserContext} from '../UserContext'
import Votes from '../Votes'
import './CommentCard.css'

function CommentCard(props) {
	const {
		created_at,
		author,
		body,
		votes,
		comment_id,
		removeCommentFromLocal,
	} = props

	const [reveal, setReveal] = React.useState(false)
	const date = new Date(created_at)

	let synop = body
	if (synop.length > 50) {
		synop = synop.slice(0, 50)
		synop += '...'
	}

	const showComment = () => {
		setReveal((prev) => !prev)
	}

	const [user] = React.useContext(UserContext)
	const isAuthor = author === user

	return (
		<li className='comment-card'>
			<p className='comment' onClick={showComment}>
				{author}: {reveal ? body : synop}
			</p>
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
			<p className='date'>{date.toLocaleString()}</p>
		</li>
	)

	//(
	// 	<li className='comment-card'>
	// 		<div className='author'>
	// 			<p className='body'>{body}</p>
	// 			<h3>{author}</h3>
	// 			<h4>{date.toLocaleString()}</h4>
	// 		</div>
	// 		{isAuthor ? (
	// 			<Delete
	// 				id={comment_id}
	// 				type='comments'
	// 				votes={votes}
	// 				removeFunc={removeCommentFromLocal}
	// 			/>
	// 		) : (
	// 			<Votes id={comment_id} votes={votes} type='comments' />
	// 		)}
	// 	</li>
	// );
}

export default CommentCard

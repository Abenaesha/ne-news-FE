import React from 'react';
import { Link } from '@reach/router';
import Votes from '../Votes';
import Delete from '../Delete';
import { UserContext } from '../UserContext';

function ArticleCard(props) {
	const {
		author,
		created_at,
		topic,
		body,
		comment_count,
		article_id,
		title,
		votes,
		removeArticleFromLocal,
	} = props;
	const data = new Date( created_at );
	let bodyLen = body;
	if (bodyLen.length > 50) {
		bodyLen = bodyLen.slice(0, 50);
		bodyLen += '...';
	}

	const [user] = React.useContext(UserContext);
	const isAuthor = author === user;

	return (
		<li className='article-card'>
			<Link
				to={`/articles/topic/${topic}`}
				className='topic'
				state={{ loadComments: false }}>
				{topic.toUpperCase()}
			</Link>
			<Link
				className='title'
				to={`/articles/${article_id}`}
				state={{ loadComments: false }}>
				<h3>{title}</h3>
			</Link>
			<p className='data'>{data.toLocaleString()}</p>
			<p className='boduLen'>{bodyLen}</p>
			<p>
				By:
				<Link to={`/users/${author}/articles`} className='author'>
					{author}
				</Link>
			</p>
			{isAuthor ? (
				<Delete
					id={article_id}
					type='articles'
					votes={votes}
					removeFunc={removeArticleFromLocal}
				/>
			) : (
				<Votes id={article_id} votes={votes} type='articles' />
			)}
			<Link
				className='article-card-comments'
				to={`/articles/${article_id}`}
				state={{ loadComments: true }}>
				{comment_count} Comments
			</Link>
		</li>
	);
}

export default ArticleCard;

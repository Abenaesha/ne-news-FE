import React from 'react';
import { Link } from '@reach/router';
import './TopicCard.css';
import { capitaliseString } from '../../utils/util';

function TopicCard({ slug, description }) {
	return (
		<li className='topic-card'>
			<Link to={`/articles/topic/${slug}`}>
				<h3>{capitaliseString(slug)}</h3>
				<p>{description}</p>
			</Link>
		</li>
	);
}

export default TopicCard;

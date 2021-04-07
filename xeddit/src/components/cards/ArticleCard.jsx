import React from 'react';
import { Link } from '@reach/router';

function ArticleCard(props) {
    const data = new Date(props.created_at);
    let bodyLen = props.body;
    if (bodyLen.length > 50) {
        bodyLen = bodyLen.slice(0, 50)
        bodyLen += '...';
    }

    return (
        <li>
            <p className='topic'>{props.topic}</p>
            <Link to={`/articles/${props.article_id}`}>
                <h3 className='title'>{props.title}</h3>
            </Link>
            <p>{data.toLocaleString()}</p>
            <Link to={`/articles/${props.article_id}`}>
                <p className='bodyLen'>{bodyLen}</p>
            </Link>
            <p>
                By:
                <Link to={`/users/${props.author}/articles`} className='author'>
                    {props.author}                
                </Link>
            </p>
            <button className="vote-button up">UP</button>
            <button className="vote-button down">DOWN</button>
            <p className="votes">{props.votes} Votes</p>
            <Link to={`/${props.article_id}/comments`}>
                {props.comment_count} Comments
            </Link>
        </li>
    )
}

export default ArticleCard;
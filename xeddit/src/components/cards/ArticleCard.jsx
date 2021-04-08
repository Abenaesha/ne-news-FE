import React from 'react';
import { Link } from '@reach/router';
import Votes from '../Votes';

function ArticleCard( props ) {
    console.log(props)
    const data = new Date(props.created_at);
    let bodyLen = props.body;
    if (bodyLen.length > 50) {
        bodyLen = bodyLen.slice(0, 50)
        bodyLen += '...';
    }

    return (
        <li className='article-card'>
            <Link
        to={`/articles/topic/${props.topic}`}
        className="topic"
      >
        {(props.topic).toUpperCase()}
      </Link>
      <Link
        className="title"
        to={`/articles/${props.article_id}`}
      >
        <h3>{props.title}</h3>
      </Link>
            <p className='data'>{data.toLocaleString()}</p>
            <p className='boduLen'>{bodyLen}</p>
            <p>
                By:
                <Link to={`/users/${props.author}/articles`} className='author'>
                    
                    {props.author}
                </Link>
            </p>
            <Votes id={props.article_id} votes={props.votes} type='articles'/>
            <Link to={`/${props.article_id}/comments`}>
                {props.comment_count} Comments
            </Link>
        </li>
    )
}

export default ArticleCard;
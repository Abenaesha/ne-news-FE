import React from 'react'

function CommentCard(props) {
    const date = new Date(props.created_at);
    let bodyLen = props.body;
    if (bodyLen > 50) {
        bodyLen = bodyLen.slice(0, 50);
        bodyLen += '...';
    }
        return (
            <li>
            <p className="author">
              {props.author}: {bodyLen}
            </p>
            <button className="vote-button up">^</button>
            <button className="vote-button down">v</button>
            <p className="votes">{props.votes}</p>
            <p>{date.toLocaleString()}</p>
          </li>
        )
}


export default CommentCard;
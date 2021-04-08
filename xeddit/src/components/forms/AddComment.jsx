import React, { Component } from 'react';
import * as api from '../../utils/api';

export default class AddComment extends Component {
	state = {
		body: '',
		username: 'tickle122',
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { username, body } = this.state;

      api.insertItem(this.props.article_id, { username, body } ).then(( { comment } ) => {
				this.props.addPostedComment(comment)
      })
	};
	render() {
		const { body, username } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<br/>
				<small className="comment-msg"><h5>Comment as {username}</h5></small>
				<textarea
					rows='2'
					placeholder='Write your comment here'
					onChange={this.handleChange}
          name='body'
          value={body}
				/>
				<br/>
				<button>Post Comment</button>
			</form>
		);
	}
}

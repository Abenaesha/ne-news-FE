import React, { Component } from 'react';
import * as api from '../../utils/api';
import { UserContext } from '../UserContext';
export default class AddComment extends Component {
	state = {
		body: '',
	};

	static contextType = UserContext;

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { body } = this.state;
		const [user] = this.context;
		if (user && body) {
			const newItem = { username: user, body };
			api
				.insertItem(newItem, this.props.article_id)
				.then( ( {newComment} ) => {
					this.props.addCommentToLocal(newComment);
					this.setState({ body: '' });
				});
		}
	};
	render() {
		const { body, username } = this.state;
		const disabled = !body;
		const [user] = this.context;
		return (
			<form onSubmit={this.handleSubmit}>
				<br />
				<small className='comment-msg'>
					<h5>Comment as {username}</h5>
				</small>
				<textarea
					rows='2'
					placeholder='Write your comment here'
					onChange={this.handleChange}
					name='body'
					id='body'
					value={body}
				/>
				<br />
				<button disabled={disabled}>Post Comment</button>
				{!user && <p>Sign in to post</p>}
			</form>
		);
	}
}

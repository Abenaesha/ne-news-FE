import React, { Component } from 'react';
import * as api from '../../utils/api';
import { UserContext } from '../UserContext';

class AddArticle extends Component {
	state = {
		title: '',
		body: '',
		author: 'tickle122',
		topic: '',
		topics: [],
	};
	static contextType = UserContext;

	componentDidMount() {
		api.fetchTopics().then((topics) => {
			this.setState({ topics, isLoading: false });
		});
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { title, body, topic } = this.state;
		const [ user ] = this.context;
		if (title && user && body && topic) {
			const newArticle = { title, author: user, body, topic };
			api.insertItem(newArticle).then((newArticle) => {
				console.log(newArticle);
			});
		}
	};

	render() {
		const { title, body, topics, topic } = this.state;
		const disabled = !title || !body || !topic;
    const [user] = this.context;
		return (
			<form type='submit' className='AddArticle' onSubmit={this.handleSubmit}>
				<select onChange={this.handleChange} id='topic' name='topic'>
					<option value={topics}>Select Topic</option>
					{topics.map((topic) => {
						return (
							<option key={topic.slug} value={topic.slug}>
								{topic.slug}
							</option>
						);
					})}
				</select>
				<br/>
				<label htmlFor='article-name'>
					<input
						type='text'
						placeholder='Article Name'
						className='article_name_input'
						onChange={this.handleChange}
						id='title'
						name='title'
						value={title}
					/>
				</label>
				<br/>
				<textarea
					rows='5'
					placeholder='write your thoughts'
					className='article_body_input'
					onChange={this.handleChange}
					type='text'
					id='body'
					name='body'
					value={body}
				/>
				<br/>
				<button disabled={disabled}>Post Article</button>
				{!user && <p>sign in to post</p>}
			</form>
		);
	}
}

export default AddArticle
import React, { Component } from 'react';
import * as api from '../../utils/api';

class AddArticle extends Component {
	state = {
		title: '',
		body: '',
		author: 'tickle122',
		topic: '',
		topics: [],
	};

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
		const { title, author, body, topic } = this.state;
		if ((title, author, body, topic)) {
			const newItem = { title, author, body, topic };
			api.insertItem(newItem).then((newArticle) => {
				console.log(newArticle);
			});
		}
	};

	render() {
		const { title, body, topics } = this.state;
		console.log(title, body, topics);
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
				<button>Post Article</button>
			</form>
		);
	}
}

export default AddArticle
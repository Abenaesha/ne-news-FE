import React, { Component } from 'react';
import * as api from '../../utils/api';
import CommentsList from '../CommentsList';
import Votes from '../Votes';
import AddComment from '../forms/AddComment';

class ArticlePage extends Component {
	state = {
		article: {},
		comments: [],
		isLoading: true,
		showAddComment: false,
	};

	componentDidMount() {
		const { article_id } = this.props;
		Promise.all([
			api.fetchArticlesById(article_id),
			api.fetchCommentsByArticleId(article_id),
		]).then(([article, comments]) => {
			this.setState({ article, comments, isLoading: false });
		});
	}

	//showComments = () => {
	// const { article_id } = this.props;
	// api.fetchCommentsByArticleId(article_id).then(comments => {
	//     this.setState(() => {
	//         return { comments: comments}
	//     })
	// })
	//}
	addPostedComment = (newComment) => {
		this.setState(({ comments }) => {
			return { comments: [newComment, ...comments] };
		});
	};

	render() {
		const { article, comments, isLoading } = this.state;
		if (isLoading) return <p>Loading...</p>;
		return (
			<main className='article-page'>
				<article>
					<h1>{article.topic.toUpperCase()}</h1>
					<h3>{article.title}</h3>
					<p>{article.body}</p>
					<h5 className='author'>By: {article.author}</h5>
					<Votes
						id={article.article_id}
						votes={article.votes}
						type='articles'
					/>
					{/* <button onClick={this.showComments}> */}
					<span>{article.comment_count} Comments</span>
					{/* </button> */}
						<AddComment
							topic={this.props.topic}
							updateCoshowAddComments={this.addPostedComment}
						/>
					<CommentsList comments={comments} />
				</article>
			</main>
		);
	}
}

export default ArticlePage;

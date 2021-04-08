import React, { Component } from 'react';
import * as api from '../../utils/api';
import CommentsList from '../CommentsList';
import Votes from '../Votes';
import AddComment from '../forms/AddComment';
// import Pagination from '../Pagination';

class ArticlePage extends Component {
	state = {
		article: {},
		comments: [],
		isLoading: true,
    page: 1,
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

	addPostedComment = (newComment) => {
		this.setState(({ comments }) => {
			return { comments: [newComment, ...comments] };
		});
  };
  
  changePage = (nextPage) => {
		this.setState(
			({ page }) => {
				return { page: page + nextPage };
			},
			() => this.getArticles()
		);
	};

	render() {
		const { article, comments, isLoading } = this.state;
		console.log(comments)
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
					<span>{article.comment_count} Comments</span>
						<AddComment
						topic={this.props.topic}
						article_id={this.props.article_id}
						addPostedComment={this.addPostedComment}
						/>
					<CommentsList comments={comments} />
				</article>
			</main>
		);
	}
}

export default ArticlePage;

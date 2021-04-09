import React, { Component } from 'react';
import ArticleCard from './cards/ArticleCard';
import * as api from '../utils/api';
import AddArticle from './forms/AddArticle';
import Pagination from './Pagination';
import SortBy from './SortBy';

class ArticlesList extends Component {
	state = {
		articles: [],
		isLoading: true,
		sort_by: 'created_at',
		order: 'desc',
		page: 1,
		showAddArticle: false,
	};

	componentDidMount() {
		this.getArticles();
	}

	componentDidUpdate(prevProps) {
		const { topic, page } = this.props;
		if (topic !== prevProps.topic || page !== prevProps.page) {
			this.setState({ isLoading: true });
			this.getArticles();
		}
	}
	getArticles = () => {
		const { topic, username } = this.props;
		const { sort_by, order, page } = this.state;
		api
			.fetchArticles(topic, username, sort_by, order, page)
			.then((articles) => {
				this.setState({ articles, isLoading: false });
			});
	};

	updateArticles = (newArticle) => {
		this.setState(({ articles }) => {
			return { articles: [newArticle, ...articles] };
		});
	};

	toggleAddArticle = () => {
		this.setState(({ showAddArticle }) => {
			return { showAddArticle: !showAddArticle };
		});
	};

	handleOrder = () => {
		this.setState(
			({ order }) => {
				if (order === 'asc') {
					return { order: 'desc' };
				} else {
					return { order: 'asc' };
				}
			},
			() => this.getArticles()
		);
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value }, () => this.getArticles());
	};

	changePage = (nextPage) => {
		this.setState(({ page }) => {
			return { page: page + nextPage };
		});
	};

	removeArticleFromLocal = (article_id) => {
		this.setState(({ articles }) => {
			const newArticles = articles.filter(
				(article) => article.article_id !== article_id
			);
			return {
				articles: newArticles,
			};
		});
	};

	render() {
		const { articles, isLoading, order, page, showAddArticle } = this.state;
		const { topic, username } = this.props;
		const noArticles = !articles.length;
		if (isLoading) return <p>Loading...</p>;
		return (
			<main className='ArticlesList'>
				<h2>
					{this.props.topic ? this.props.topic.toUpperCase() : 'ALL ARTICLES'}
				</h2>
				{this.props.username ? <h4>posted by: {this.props.username}</h4> : null}
				{/* <label>
					Sort By:
					<select onChange={this.handleChange} name='sort_by'>
						<option value='created_at'>Date</option>
						<option value='comment_count'>Comments</option>
						<option value='votes'>Votes</option>
					</select>
					<button onClick={this.handleOrder}>
						{order === 'desc' ? 'up' : 'down'}
					</button>
				</label>{' '}
				<button onClick={this.toggleAddArticle} aria-label='toggle-add-article'>
					New Article
				</button> */}
				<section className='article-buttons'>
					<SortBy
						order={order}
						handleChange={this.handleChange}
						handleOrder={this.handleOrder}
					/>{' '}
					<button
						onClick={this.toggleAddArticle}
						aria-label='toggle-add-article'>
						New Article
						<i className='fas fa-plus'></i>
					</button>
					<Pagination
						page={page}
						changePage={this.changePage}
						type='articles'
						topic={topic}
						author={username}
					/>
				</section>
				{showAddArticle && (
					<AddArticle
						topic={this.props.topic}
						updateArticles={this.updateArticles}
					/>
				)}
				{noArticles && (
					<p>No Articles yet, Be the first person to post an article?</p>
				)}
				<ul>
					{articles.map((article) => {
						return (
							<ArticleCard
								key={article.article_id}
								{...article}
								removeArticleFromLocal={this.removeArticleFromLocal}
							/>
						);
					})}
				</ul>
				{!noArticles && (
					<Pagination
						page={page}
						changePage={this.changePage}
						type='articles'
						topic={topic}
						author={username}
					/>
				)}
			</main>
		);
	}
}

export default ArticlesList;

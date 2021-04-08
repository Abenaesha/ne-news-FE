import React, { Component } from 'react';
import ArticleCard from './cards/ArticleCard';
import * as api from '../utils/api';
import AddArticle from './forms/AddArticle';

class ArticlesList extends Component {
	state = {
		articles: [],
		isLoading: true,
		sort_by: 'created_at',
    order: 'desc',
    showAddArticle: false
	};

  componentDidMount() {
    this.getArticles();
	}

  componentDidUpdate( prevProps ) {
    const { topic } = this.props;
		if (topic !== prevProps.topic) {
			this.setState({ isLoading: true });
			this.getArticles();
		}
	}
	getArticles = () => {
		const { topic, username } = this.props;
		const { sort_by, order } = this.state;
		api.fetchArticles(topic, username, sort_by, order).then((articles) => {
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

  handleChange = ( e ) => {
    const { name, value } = e.target;
		this.setState({ [name]: value }, () => this.getArticles());
	};

	render() {
		const { articles, isLoading, order, showAddArticle } = this.state;
		if (isLoading) return <p>Loading...</p>;
		return (
			<main className='ArticlesList'>
				<h2>
					{this.props.topic ? this.props.topic.toUpperCase() : 'ALL ARTICLES'}
        </h2>
        {this.props.username ? <h4>posted by: {this.props.username}</h4> : null}
				<label>
					Sort By:
					<select onChange={this.handleChange} name='sort_by'>
						<option value='created_at'>Date</option>
						<option value='comment_count'>Comments</option>
						<option value='votes'>Votes</option>
					</select>
					<button onClick={this.handleOrder}>
						{order === 'desc' ? 'up' : 'down'}
					</button>
        </label>
        {' '}
        <button
            onClick={this.toggleAddArticle}
            aria-label="toggle-add-article"
          >
          New Article
          </button>

				{showAddArticle && (
					<AddArticle
						topic={this.props.topic}
						updateArticles={this.updateArticles}
					/>
				)}
				<ul>
					{articles.map((article) => {
						return <ArticleCard key={article.article_id} {...article} />;
					})}
				</ul>
			</main>
		);
	}
}

export default ArticlesList;

import React, { Component } from "react";
import ArticleCard from "./cards/ArticleCard";
import * as api from "../utils/api";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: 'created_at',
    order: 'desc'
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
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

  handleOrder = () => {
    this.setState(({ order }) => {
     if (order === 'asc') {
       return {order: 'desc'}
      } else {
        return {order: 'asc'}
      }
    }, () => this.getArticles())
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.id]: e.target.value }, () =>
      this.getArticles()
    );
  }

  render() {
    const { articles, isLoading, order } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <main className='ArticlesList'>
        <h2>{this.props.topic ? this.props.topic : 'ARTICLES'}</h2>
        <label>
              Sort By:
              <select onChange={this.handleChange} id='sort_by'>
                <option value='created_at'>Date</option>
                <option value='comment_count'>Comments</option>
                <option value='votes'>Votes</option>
              </select>
              <button onClick={this.handleOrder}>
                {order === 'desc' ? 'up' : 'down'}
              </button>
            </label>
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

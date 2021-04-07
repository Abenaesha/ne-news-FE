import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentsList from './CommentsList'

class ArticlePage extends Component {
    state = {
        article: {},
        comments: [],
        isLoading: true
    }

    componentDidMount() {
        const { article_id } = this.props;
        api.fetchArticlesById(article_id).then(article => {
            this.setState({article, isLoading: false})
        })
    }

    showComments = () => {
        const { article_id } = this.props;
        api.fetchCommentsByArticleId(article_id).then(comments => {
            this.setState(() => {
                return { comments: comments}
            })
        })
    }

    incVote = () => {
        this.updateVote(1);
      };
    
      decVote = () => {
        if (this.state.article.votes > -100) this.updateVote(-1);
      };
    
      updateVote = (vote) => {
        api.updateArtVotes(this.state.article.article_id, vote)
          .then(() => {
            this.setState(({ article }) => {
              return { article: { ...article, votes: (article.votes += vote) } };
            });
          });
      };
    
    render() {
        const { article, comments, isLoading } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <main className='article-page'>
                <article>
                    <h1>{article.topic.toUpperCase()}</h1>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <h5 className='author'>By: {article.author}</h5>
                    <button className="vote-button up" onClick={this.incVote}>UP</button>
                    <button className="vote-button down" onClick={this.decVote}>DOWN</button>
                    <p className="votes">{article.votes} Votes</p>
                    <button onClick={this.showComments}>
                    {article.comment_count} Comments
                    </button>
                    <CommentsList comments={comments} />
                </article>

            </main>
        )
    }
}

export default ArticlePage;
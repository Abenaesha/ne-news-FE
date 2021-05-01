import React, {Component} from 'react'
import * as api from '../../utils/api'
import CommentsList from '../CommentsList'
import Votes from '../Votes'
import Delete from '../Delete'
import Deleted from '../Deleted'
import Pagination from '../Pagination'
import SortBy from '../SortBy'
import {UserContext} from '../UserContext'
import {StyledArticle} from '../../styles/ArticleStyle'
import {Link} from '@reach/router'
class ArticlePage extends Component {
	state = {
		article: {},
		comments: [],
		isLoading: true,
		page: 1,
		showAddComment: false,
		loadComments: this.props.location.state
			? this.props.location.state.loadComments
			: false,
		deleted: false,
		errMessage: '',
	}

	static contextType = UserContext

	componentDidMount() {
		const {article_id} = this.props
		const { page, loadComments } = this.state
		api
			.fetchArticlesById( article_id )
			.then( ( article ) => {
				this.setState( { article, isLoading: false } );
			} )
			.catch( ( { response: { data: { msg } } } ) =>
				this.setState( { errMessage: msg, isLoading: false } )
			);
		if (loadComments) {
			this.displayComments(page)
		} else this.setState({comments: []})
	}

	componentDidUpdate = () => {
		const { comments, loadComments, page } = this.state
		if (!comments.length && loadComments) {
			this.displayComments(page)
		} else if (comments.length && !loadComments) {
			this.setState({comments: []})
		}
	}
	displayComments = ( page ) => {
		const {article_id} = this.props
		const { sort_by, order} = this.state
		api
			.fetchCommentsByArticleId(article_id, page, sort_by, order)
			.then((comments) => 
				this.setState((prev) => {
					return {comments: comments}
				})
			).catch((err) => this.setState({ errMessage: err }));
	}



	handleChange = ({ target: { name, value } }) => {
		this.setState({[name]: value}, () => this.displayComments())
	}

	handleOrder = () => {
		this.setState(
			( { order } ) => {
				console.log(order)
				if (order === 'asc') {
					return {order: 'desc'}
				} else {
					return {order: 'asc'}
				}
			},
			() => this.displayComments()
		)
	}

	changePage = ( nextPage ) => {
		this.setState(
			( { page } ) => {
				return {page: page + nextPage}
			},
			() => this.displayComments(this.state.page)
		)
	}

	toggleComments = () => {
		this.setState(({loadComments}) => {
			return {loadComments: !loadComments}
		})
	}

	addCommentToLocal = (comment) => {
		const {comments} = this.state
		if (!comments.length) this.toggleComments()
		this.setState(({comments, article}) => {
			return {
				comments: [comment, ...comments],
				article: {
					...article,
					comment_count: article.comment_count + 1,
				},
				loadComments: true,
			}
		})
	}

	removeCommentFromLocal = (comment_id) => {
		this.setState(({comments, article}) => {
			const newComments = comments.filter(
				(comment) => comment.comment_id !== comment_id
			)
			return {
				comments: newComments,
				article: {
					...article,
					comment_count: article.comment_count - 1,
				},
			}
		})
	}

	toggleAddComment = () => {
		this.setState(({showAddComment}) => {
			return {showAddComment: !showAddComment}
		})
	}

	redirect = () => {
		this.setState({deleted: true})
	}

	render() {
		const {
			isLoading,
			article,
			comments,
			showAddComment,
			deleted,
			page,
			order,
		} = this.state
		const [user] = this.context
		const isAuthor = article.author === user
		if (isLoading) return <p>Loading...</p>
		if (deleted) return <Deleted />
		return (
			<StyledArticle>
				<article>
					<h1>{article.topic}</h1>
					<h3>{article.title.toUpperCase()}</h3>
					<p>{article.body}</p>
					<Link to={`/users/${article.author}/articles`} className='author'>
						by: {article.author}
					</Link>
					{isAuthor ? (
						<Delete
							type='articles'
							votes={article.votes}
							id={article.article_id}
							removeFunc={this.redirect}
						/>
					) : (
						<Votes
							id={article.article_id}
							votes={article.votes}
							type='articles'
						/>
					)}
					<section className="comment-buttons">
					<button onClick={this.toggleComments}>
						{article.comment_count} Comments
					</button>
					{comments.length !== 0 && (
						<>
							<Pagination
								page={page}
								changePage={this.changePage}
								article_id={article.article_id}
								type='comments'
							/>
							<SortBy
								order={order}
								handleOrder={this.handleOrder}
								handleChange={this.handleChange}
								showCommentCount={false}
							/>
						</>
					)}{' '}
					<button
						onClick={this.toggleAddComment}
						aria-label='toggle-add-comment'>
								New Comment
					</button>
					</section>
					<CommentsList
						comments={comments}
						article_id={article.article_id}
						addCommentToLocal={this.addCommentToLocal}
						removeCommentFromLocal={this.removeCommentFromLocal}
						showAddComment={showAddComment}
					/>
				</article>
			</StyledArticle>
		)
	}
}

export default ArticlePage

import React, { Component } from 'react';
import * as api from '../utils/api';

export default class Pagination extends Component {
	state = {
		pages: 0,
		totalPages: 0,
	};

	componentDidMount = () => {
		const { type, topic, author, article_id } = this.props;
		api.fetchItemCount( type, topic, author, article_id ).then( ( itemCount ) => {
			
			const totalPages = Math.ceil(itemCount / 10);
			this.setState({ totalPages });
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { type, topic, author, article_id } = this.props;

		if (topic !== prevProps.topic || author !== prevProps.author) {
			api.fetchItemCount(type, topic, author, article_id).then((itemCount) => {
				const totalPages = Math.ceil(itemCount / 10);
				this.setState({ totalPages });
			});
		}
	}

	// getItemCount = () => {
	//   const { type, topic, author, article_id } = this.props;
	//   api.fetchItemCount( type, topic, author, article_id ).then( ( itemCount ) => {
	//     const totalPages = Math.ceil( itemCount / 10 );
	//     this.setState( { totalPages } );
	//   })
	// }

	render() {
		const { page, changePage } = this.props;
		const { totalPages } = this.state;
		return (
			<section className='page'>
				<p className='page-count'>
					Page {page} of {totalPages}
				</p>
				<button
					disabled={page === 1}
					value='-1'
					onClick={() => changePage(-1)}
				>
					<i className='fas fa-chevron-left'></i>
				</button>
				<button
					value='1'
					disabled={page === totalPages || totalPages === 0}
					onClick={() => changePage(1)}
          >
					<i className='fas fa-chevron-right'></i>
				</button>
			</section>
		);
	}
}

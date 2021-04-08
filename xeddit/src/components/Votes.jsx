import React, { Component } from 'react';
import * as api from '../utils/api';

export default class Votes extends Component {
	state = {
		votes: this.props.votes,
	};

	updateVote = (vote) => {
		api.updateVotes(this.props.type, this.props.id, vote).then((data) => {
			if (data.article || data.comment) {
				this.setState(({ votes }) => {
					return { votes: votes + vote };
				});
			}
		});
	};

	render() {
		const { votes } = this.state;
		return (
			<section className='votes'>
				<button className='vote-button up' onClick={() => this.updateVote(1)}>
					UP
				</button>
				<button
					className='vote-button down'
					onClick={() => this.updateVote(-1)}>
					DOWN
				</button>
				<p className='votes'>{votes} Votes</p>
			</section>
		);
	}
}

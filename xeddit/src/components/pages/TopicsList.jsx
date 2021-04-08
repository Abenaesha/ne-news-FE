import React, { Component } from 'react';
import * as api from '../../utils/api';
import TopicCard from '../cards/TopicCard';

class TopicsList extends Component {
	state = {
		topics: [],
		isLoading: true,
		showPostTopics: false,
	};

	componentDidMount() {
		this.getTopics();
	}

	getTopics = () => {
		api.fetchTopics().then((topics) => {
			this.setState({ topics, isLoading: false });
		});
	};

	updateTopics = (newTopic) => {
		this.setState(({ topics }) => {
			return { topics: [newTopic, ...topics] };
		});
	};

	render() {
		const { topics, isLoading} = this.state;
		if (isLoading) return <p>Loading...</p>;
		return (
			<main className='topics-list'>
        <section className='topics-btn'>
          <button onClick={this.togglePostTopics}>
            +
          </button>
        </section>
				{topics.map((topic) => {
					return <TopicCard key={topic.slug} {...topic} />;
				})}
			</main>
		);
	}
}

export default TopicsList;

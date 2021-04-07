import React, { Component } from 'react';
import * as api from '../utils/api';
import TopicCard from './cards/TopicCard';


class TopicsList extends Component {
    state = {
        topics: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        api.fetchTopics().then(topics => {
            this.setState({topics, isLoading: false});
        });
    };
    
    
    render() {
        const {topics, isLoading} = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <main className='topics-list'>
                {topics.map(topic => {
                    return <TopicCard key={topic.slug} {...topic} />
                })}
            </main>
        )
    }
}


export default TopicsList;
import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import SignIn from './forms/signIn';

class Navbar extends Component {
    state = {
        topics: [],
        isLoading: true,
    };

    componentDidMount() {
        api.fetchTopics().then(topics => {
            this.setState(() => {
                return {topics, isLoading: false}
            })
        })
    }
    
    render() {
        const { topics, isLoading } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <nav className='Navbar'>
                <SignIn />
                <Link to={'/'}>
                    ARTICLES
                </Link>
                <Link to='/topics'>
                   TOPICS:
                </Link>
                {topics.map(topic => {
                    return <Link to={`/articles/topic/${topic.slug}`} key={topic.slug}>
                        {topic.slug.toUpperCase()}
                        </Link>
                    })
                }
            </nav>
        )
    }
}

export default Navbar;
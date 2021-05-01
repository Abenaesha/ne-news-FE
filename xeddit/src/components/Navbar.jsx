import React, {Component} from 'react'
import {Link} from '@reach/router'
import * as api from '../utils/api'
import SignIn from './forms/signIn'
import {StyledNav} from '../styles/NavBarStyle'

class Navbar extends Component {
	state = {
		topics: [],
		isLoading: true,
	}

	componentDidMount() {
		api.fetchTopics().then((topics) => {
			this.setState(() => {
				return {topics, isLoading: false}
			})
		})
	}

	handleSlider = ({target: {value}}) => {
        const { setTheme } = this.props
		let theme = 'theme1'
		switch (value) {
			case '3':
				theme = 'theme1'
				break
			case '2':
				theme = 'theme2'
				break
			case '1':
				theme = 'theme3'
				break
			default:
				theme = 'theme4'
		}

		setTheme(theme)
		localStorage.setItem('xedditTheme', theme)
	}

	render() {
		const {topics, isLoading} = this.state
		const {showNav, toggleNav} = this.props
		if (isLoading) return <p>Loading...</p>
		return (
			<StyledNav show={showNav} className='navbar'>
				{/* <nav className='Navbar'> */}
				<SignIn />
				<Link onClick={toggleNav} to={'/'}>
					ARTICLES
				</Link>
				<Link onClick={toggleNav} to='/topics'>
					TOPICS:
				</Link>
				{topics.map((topic) => {
					return (
						<Link to={`/articles/topic/${topic.slug}`} key={topic.slug}>
							{topic.slug.toUpperCase()}
						</Link>
					)
				})}
				<label>
					Choose Theme:
					<input onChange={this.handleSlider} type='range' min='0' max='3' />
				</label>
				{/* </nav> */}
			</StyledNav>
		)
	}
}

export default Navbar

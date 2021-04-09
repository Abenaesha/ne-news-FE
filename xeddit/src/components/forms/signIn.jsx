import React, { Component } from 'react';
import * as api from '../../utils/api';
import { UserContext } from '../UserContext';

export default class SignIn extends Component {
	state = {
		input: '',
		username: '',
		signedIn: false,
		notValid: false,
	};

	static contextType = UserContext;

	signIn = (e) => {
		e.preventDefault();
		const [user, setUser] = this.context;
		api.fetchAllUsers().then((users) => {
			console.log(users);
			const userFound = users.find(
				(user) => user.username === this.state.input
			);
			if (userFound) {
				localStorage.setItem('ra2021', userFound.username);
				this.setState({
					input: '',
					username: userFound.username,
					signedIn: true,
				});
				setUser(userFound.username);
			} else this.setState({ notValid: true });
		});
	};

	componentDidMount = () => {
		const [user] = this.context;
		if (user) {
			api.fetchUser(user).then(({ avatar_url, name }) => {
				this.setState({ username: user, avatar_url, name, signedIn: true });
			});
		}
	};

	componentDidUpdate = () => {
		if (this.state.signedIn && !this.state.avatar_url) {
			const [user] = this.context;
			if (user) {
				api.fetchUser(user).then(({ avatar_url, name }) => {
					this.setState({ username: user, avatar_url, name });
				});
			}
		}
	};
	signOut = () => {
		localStorage.removeItem('ra2021');
		const [user, setUser] = this.context;
		this.setState({ username: '', avatar_url: '', name: '', signedIn: false });
		setUser(null);
	};

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({ input: value, notValid: false });
	};

	render() {
		const { input, username, avatar_url, notValid } = this.state;

		if (username)
			return (
				<section className='signed-in'>
					<div className='user--container'>
						<img className='avatar-pic' src={avatar_url} alt={`avatar of `} />
						<h4 className='user'>{username}</h4>
					</div>
					<button onClick={this.signOut}>Sign Out</button>
				</section>
			);
		return (
			<form onSubmit={this.signIn} className='signin-form'>
				<div className="form--container">
          <label aria-label='sign-in'>
            <input
              type='text'
              placeholder='Username'
              value={input}
              onChange={this.handleChange}
            />
          </label>
          <button className='sign-in-btn' disabled={!input}>
            Sign In
          </button>
          {notValid && <p className='invalid'>Not a valid username</p>}
        </div>
			</form>
		);
	}
}

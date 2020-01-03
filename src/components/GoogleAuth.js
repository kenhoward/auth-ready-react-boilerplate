import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// See README for for Google Oauth Instructions
// You will need to create this config file where you
// can store your Google Oauth ClientId is you so desire
import { clientId } from '../config/gapi';

class GoogleAuth extends Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId,
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		// TODO I do not like this approach - will refactor
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<li>
					<NavLink to='/' onClick={this.auth.signOut}>
						<i className='google icon' />
						Logout
					</NavLink>
				</li>
			);
		} else {
			return (
				<li>
					<NavLink to='/' onClick={this.auth.signIn}>
						<i className='google icon' />
						Sign In
					</NavLink>
				</li>
			);
		}
	}

	render() {
		return <ul className='right'>{this.renderAuthButton()}</ul>;
	}
}

export default GoogleAuth;

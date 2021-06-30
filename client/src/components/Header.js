import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	renderContent() {
		const loginURL = 'https://emailyserver.run-us-west2.goorm.io/auth/google';
		const logoutURL = 'https://emailyserver.run-us-west2.goorm.io/api/logout';
		switch (this.props.auth) {
			case false:
				return (
					<a href={loginURL}>
						<i className="left small material-icons">
							group_add
						</i>
						Login With G+
					</a>
				);
			case null:
				return null;
			default:
				return (
					<a href={logoutURL}>
						<i className="left small material-icons">
							group
						</i>
						Log Out
					</a>
				);
		}
	}

	renderLogoLink() {
		if (this.props.auth) {
			return '/dashboard';
		}
		return '/';
	}

	render() {
		console.log(this.props);
		return (
			<>
				<nav>
					<div className="nav-wrapper">
						<Link to={this.renderLogoLink()} className="brand-logo">
							<i className="material-icons">email</i>
							Emaily
						</Link>
						<ul id="nav-mobile" className="right">
							<li>{this.renderContent()}</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
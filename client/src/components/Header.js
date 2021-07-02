import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
	renderContent() {
		const loginURL = 'https://emailyserver.run-us-west2.goorm.io/auth/google';
		const logoutURL = 'https://emailyserver.run-us-west2.goorm.io/api/logout';
		switch (this.props.auth) {
			case false:
				return (
					<a href={loginURL}>
						<i className="left small material-icons">group_add</i>
						Login With G+
					</a>
				);
			case null:
				return null;
			default:
				return (
					<>
						<li>
							<Payments />
						</li>
						<li>
							<a className="btn" 
								style={{backgroundColor: "#2ecc71", color: "#fff"}}>
								Credits: {this.props.auth.credits}
							</a>
						</li>
						<li>
							<a href={logoutURL}>
								<i className="left small material-icons">group</i>
								Log Out
							</a>
						</li>
					</>
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
		// console.clear();
		return (
			<>
				<nav>
					<div className="nav-wrapper blue lighten-1" >
						<Link to={this.renderLogoLink()} className="brand-logo">
							<i className="material-icons">email</i>
							Emaily
						</Link>
						<ul id="nav-mobile" className="right">
							{this.renderContent()}
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
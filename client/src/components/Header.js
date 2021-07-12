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
							<button
								className="btn credits"
								style={{
									margin: '0 1rem',
									backgroundColor: 'rgb(108 128 132)',
									color: '#fff',
									cursor: 'default',
									border: 'none',
									borderRadius: '40%',
									fontStyle: "oblique",
									fontWeight: "700",
								}}
							>
								Credits: {this.props.auth.credits}
							</button>
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
			return '/surveys';
		}
		return '/';
	}

	render() {
		// console.clear();
		return (
			<>
				<nav>
					<div className="nav-wrapper blue lighten-1">
						<Link to={this.renderLogoLink()} className="brand-logo">
							Emaily
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
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
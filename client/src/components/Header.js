import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class Header extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchUser();
	}

	render() {
		return (
			<>
				<nav>
					<div className="nav-wrapper">
						<a  href="www" className="brand-logo">
							<i className="material-icons">email</i>
							Emaily
						</a>
						<ul id="nav-mobile" className="right">
							<li>
								<a href="www" >
									<i className="left material-icons">perm_identity</i>
									Log In With Google
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default connect(null, {fetchUser})(Header);
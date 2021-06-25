import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">
							<i className="material-icons">email</i>
							Emaily
						</a>
						<ul id="nav-mobile" className="right">
							<li>
								<a>
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

export default Header;
import React from 'react';

const Landing = () => {
	return (
		<>
			<div className="center" id="header">
				<h1 className="header center" id="header-title">
					FEEDBACK
				</h1>
				<h4 id="header-text">Collect feedback from user</h4>
			</div>
			<div className="white-text tech-intro" style={{marginTop: "10rem"}}>
				<div className="introduction" style={{padding: "2rem"}}>
					<div className="icon-block">
						<h2 className="center" style={{marginTop: "0"}}>
							<i className="material-icons Medium">account_circle</i>
						</h2>
						<h5 className="center">Login With Google</h5>
					</div>
				</div>
				<div className="introduction" style={{padding: "2rem"}}>
					<div className="icon-block">
						<h2 className="center" style={{marginTop: "0"}}>
							<i className="material-icons Medium">payment</i>
						</h2>
						<h5 className="center">Use Stripe to pay for the credits</h5>
					</div>
				</div>
				<div className="introduction" style={{padding: "2rem"}}>
					<div className="icon-block">
						<h2 className="center" style={{marginTop: "0"}}> 
							<i className="material-icons Medium">email</i>
						</h2>
						<h5 className="center">Send customized emails to recipients</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
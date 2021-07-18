import React from 'react';

const Landing = () => {
	return (
		<>
			<div className="center" id="header">
				<h1 class="header center" id="header-title">
					FEEDBACK
				</h1>
				<h4 id="header-text">Collect feedback from user</h4>
			</div>
			<div className="white-text tech-intro" style={{marginTop: "10rem"}}>
				<div class="introduction" style={{padding: "2rem"}}>
					<div class="icon-block">
						<h2 class="center" style={{marginTop: "0"}}>
							<i class="material-icons Medium">account_circle</i>
						</h2>
						<h5 class="center">Login With Google</h5>
					</div>
				</div>
				<div class="introduction" style={{padding: "2rem"}}>
					<div class="icon-block">
						<h2 class="center" style={{marginTop: "0"}}>
							<i class="material-icons Medium">payment</i>
						</h2>
						<h5 class="center">Use Stripe to pay for the credits</h5>
					</div>
				</div>
				<div class="introduction" style={{padding: "2rem"}}>
					<div class="icon-block">
						<h2 class="center" style={{marginTop: "0"}}> 
							<i class="material-icons Medium">email</i>
						</h2>
						<h5 class="center">Send customized emails to recipients</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
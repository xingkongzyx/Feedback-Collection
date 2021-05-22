import React from 'react';

function App() {
	// 	在prod阶段href = "/auth/google"
	// 	reactRedirectURL只是用于dev阶段
	const reactRedirectURL = 'https://emailyserver.run-us-west2.goorm.io/auth/google/';
	return (
		<div>
			<h1>
				<a href={reactRedirectURL}>Click me</a>
			</h1>
		</div>
	);
}

export default App;
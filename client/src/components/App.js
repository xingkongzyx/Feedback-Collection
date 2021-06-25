import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const pageOne = () => {
	return <div>PageOne</div>;
};



const App = () => {
	// 	在prod阶段href = "/auth/google"
	// 	reactRedirectURL只是用于dev阶段
	const reactRedirectURL = 'https://emailyserver.run-us-west2.goorm.io/auth/google/';
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" component={pageOne} exact></Route>
				</div>
			</BrowserRouter>
			<h1>
				<a href={reactRedirectURL}>Click me</a>
			</h1>
		</div>
	);
};

export default App;
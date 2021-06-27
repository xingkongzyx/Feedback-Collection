import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import { fetchUser } from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
// 	在prod阶段href = "/auth/google"
// 	reactRedirectURL只是用于dev阶段
// const reactRedirectURL = 'https://emailyserver.run-us-west2.goorm.io/auth/google/';
	componentDidMount() {
		this.props.fetchUser();
	}
	
	render() {
		
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</BrowserRouter>
				<h1>
					<a href="/auth/google">Click me</a>
					<br />
					<a href="/api/currentUser">Click me for profile</a>
				</h1>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(App);
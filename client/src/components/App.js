import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Dashboard from "./Dashboard"
import Landing from "./Landing"
import { fetchUser } from '../actions';

const SurveyNew = () => <h2>SurveyNew</h2>;
// import "../style.css"
class App extends React.Component {
	// 	在prod阶段href = "/auth/google"
	// 	reactRedirectURL只是用于dev阶段
	// const reactRedirectURL = 'https://emailyserver.run-us-west2.goorm.io/auth/google/';
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/surveys" component={SurveyNew} />
						<Route path="/landing" component={Landing} />
					</div>
				</BrowserRouter>
				<h1>
					<a className="waves-effect waves-light btn" href="https://emailyserver.run-us-west2.goorm.io/api/current_user">
						Check status
					</a>
				</h1>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(App);
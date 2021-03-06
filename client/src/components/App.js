import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Landing from './Landing';
import { fetchUser } from '../actions';

import "./style.css"
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
						<Route exact path="/surveys" component={Dashboard} />
						<Route exact path="/surveys/new" component={SurveyNew} />
						<Route path="/landing" component={Landing} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(App);
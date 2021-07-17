import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSurveys } from '../actions';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getSurveys();
	}

	renderSurveys = () => {
		console.log('surveys', this.props.surveys);
		return this.props.surveys.map((survey) => {
			return (
				<div key={survey._id}>
					<h3>{survey.title}</h3>
					<h5>{survey.body}</h5>
					<h5>{survey.dateSent}</h5>
				</div>
			);
		});
	};

	render() {
		return (
			<div className="container">
				<div>{this.renderSurveys()}</div>
				<div className="fixed-action-btn">
					<Link className="btn-floating btn-large blue" to="/surveys/new">
						<i className="large material-icons">add</i>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { surveys: state.surveys || [] };
};

export default connect(mapStateToProps, { getSurveys })(Dashboard);
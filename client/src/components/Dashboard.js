import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSurveys } from '../actions';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getSurveys();
	}

	renderSurveys = () => {
		return this.props.surveys.map((survey) => {
			return (
				<div className="card darken-1" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">
							Sent On: {new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div className="container">
				{this.renderSurveys()}
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
import React from 'react';
import { connect } from 'react-redux';

class SurveyFormReview extends React.Component {
	renderContent() {
		const { formValues } = this.props;
		const FIELDS = [
			['Survey Title', formValues.title],
			['Subject Line', formValues.subject],
			['Email Body', formValues.body],
			['Recipient List', formValues.emails],
		];

		return FIELDS.map((field) => {
			return (
				<div className="col s6" keys={field[0]}>
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
							<span className="card-title h3">{field[0]}</span>
							<p>{field[1]}</p>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="row" style={{ marginTop: '5vh' }}>
					<h5 className="center-align">Please Confirm Your Entries</h5>
					{this.renderContent()}
				</div>
				<button
					className="yellow darken-3 btn waves-effect waves-light"
					onClick={this.props.onSurveyBack}
				>
					Back
					<i className="material-icons right">settings_backup_restore</i>
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values,
	};
}

export default connect(mapStateToProps)(SurveyFormReview);
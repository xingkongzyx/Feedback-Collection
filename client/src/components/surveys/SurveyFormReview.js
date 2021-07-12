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
				<div className="col s12">
					<div className="card teal darken-2">
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
				<div className="row" style={{marginTop: "5vh"}}>{this.renderContent()}</div>
				<button
					className="yellow btn waves-effect waves-light"
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
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom"
import SurveyField from './SurveyField';


class SurveyForm extends React.Component {
	onFormSubmit = (formValues) => {
		console.log(formValues);
	};

	renderFields = () => {
		return (
			<>
				<div className="row">
					<Field 
						component={SurveyField} 
						name="title" 
						label="Survey Title" 
						type="text" />
				</div>
				<div className="row">
					<Field
						component={SurveyField}
						name="subject"
						label="Subject Line"
						type="text"
					/>
				</div>
				<div className="row">
					<Field 
						component={SurveyField} 
						name="body" 
						label="Email Body" 
						type="text" />
				</div>
				<div className="row">
					<Field
						component={SurveyField}
						name="emails"
						label="Recipient List"
						type="text"
					/>
				</div>
			</>
		);
	};

	render() {
		return (
			<div>
				<form className="surveyForm"
					onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
					{this.renderFields()}
					<Link
						to="/surveys"
						className="red btn-flat white-text"
					>
						Cancel
					</Link>
					
					<button
						className="teal btn-flat right white-text"
						type="submit"
					>
						Next
						<i className="material-icons right">done</i>
					</button>	
				</form>
			</div>
		);
	}
}

export default reduxForm({ form: 'CreateSurvey' })(SurveyForm);
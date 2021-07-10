import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';

class SurveyForm extends React.Component {
	onFormSubmit = (formValues) => {
		// console.log(formValues);
	};

	renderFields = () => {
		return (
			<>
				<div className="row">
					<Field component={SurveyField} name="title" label="Survey Title" type="text" />
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
					<Field component={SurveyField} name="body" label="Email Body" type="text" />
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
				<form className="surveyForm" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn waves-effect waves-light">
						Cancel
					</Link>

					<button className="teal btn waves-effect waves-light right" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

const validate = (values) => {
	const errors = {};
	
	errors.emails = validateEmail(values.emails || '');
	if (!values.title) {
		// 	如果title为空
		errors.title = 'Please provide the title';
	}
	if (!values.subject) {
		errors.subject = 'Please provide the subject';
	}
	if (!values.body) {
		errors.body = 'Please provide email body';
	}
	if (!values.emails) {
		errors.emails = 'Please provide email list';
	}
		
	return errors;
};

export default reduxForm({ validate: validate, form: 'CreateSurvey' })(SurveyForm);
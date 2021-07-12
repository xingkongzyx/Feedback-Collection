import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';

class SurveyForm extends React.Component {

	renderFields = () => {
		return (
			<>
				<div className="row">
					<Field component={SurveyField}
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
					<Field component={SurveyField}
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
					onSubmit={this.props.handleSubmit(this.props.onSurveyNext)} >
					
					{this.renderFields()}
					
					<Link to="/surveys"
						className="red btn waves-effect waves-light">
						Cancel
						<i
							className="material-icons right">cancel</i>
					</Link>

					<button
						className="teal btn waves-effect waves-light right"
						type="submit">
						Next
						<i
							className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

// 在user submit the form时验证各个field的输入是否满足要求
const validate = (values) => {
	const errors = {};

	errors.emails = validateEmail(values.emails || '');
	if (!values.title) {
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

export default reduxForm({
	validate: validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(
	SurveyForm
);
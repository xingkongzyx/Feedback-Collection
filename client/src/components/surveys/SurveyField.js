import React from 'react';

const SurveyField = (props) => {
	const { input, meta } = props;
	return (
		<div className="input-field col s12">
			<input {...input}
				className="surveyFormInput" />
			<label className="active labelText">{props.label}</label>
			<div className="red-text" style={{marginBottom: "20px"}}>
				{meta.touched && meta.error}
			</div>
		</div>
	);
};

export default SurveyField;  
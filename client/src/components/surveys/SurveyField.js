import React from 'react';

const SurveyField = (props) => {
	return (
		<div className="input-field col s12">
			<input
				value={props.input.value}
				onChange={props.input.onChange}
				className="surveyFormInput"
			/>
			<label className="active labelText">{props.label}</label>
		</div>
	);
};

export default SurveyField;
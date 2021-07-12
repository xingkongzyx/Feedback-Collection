import React from 'react';

const SurveyFormReview = (props) => {
	return (
		<div>
			<button className="yellow btn waves-effect waves-light" onClick={props.onSurveyBack} >
				Back
				<i className="material-icons right">settings_backup_restore
</i>
			</button>
		</div>
	);
};

export default SurveyFormReview;
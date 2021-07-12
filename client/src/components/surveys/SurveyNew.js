import React from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends React.Component {
	// 	set up state to decide whether to show the review component(defaulted to false);
	state = { showFormReview: false };

	onShowFormReview = () => {
		// 	change state to show SurveyFormReview component
		this.setState({ showFormReview: true });
	};

	onHideFormReview = () => {
		// 	change state to show SurveyForm component
		this.setState({ showFormReview: false });
	};

	renderComponent() {
		// 	如果showFormReview为true，则显示showFormReview component
		if (this.state.showFormReview) {
			return <SurveyFormReview onSurveyBack={this.onHideFormReview} />;
		}
		return <SurveyForm onSurveyNext={this.onShowFormReview} />;
	}

	render() {
		return <div className="container">{this.renderComponent()}</div>;
	}
}

export default SurveyNew;
import React from "react";
import { connect } from "react-redux";
import { submitSurvey } from "../../actions";

import { withRouter } from "react-router-dom";

class SurveyFormReview extends React.Component {
  // 	render the content JSX
  renderContent() {
    const { formValues } = this.props;
    const FIELDS = [
      ["Survey Title", formValues.title],
      ["Subject Line", formValues.subject],
      ["Email Body", formValues.body],
      ["Recipient List", formValues.recipients],
    ];

    return FIELDS.map((field) => {
      return (
        <div
          className="col s6 hoverable"
          key={field[0]}
        >
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title h3" id="review-card-title">
                {field[0]}
              </span>
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
        <div
          className="row"
          style={{ marginTop: "5vh" }}
        >
          <h5 className="center-align">
            Please Confirm Your Entries
          </h5>
          {this.renderContent()}
        </div>
        <button
          className="yellow darken-3 white-text btn waves-effect waves-light"
          onClick={this.props.onSurveyBack}
        >
          Back
          <i className="material-icons right">
            settings_backup_restore
          </i>
        </button>
        <button
          className="green right white-text btn waves-effect waves-light"
          onClick={() =>
            this.props.submitSurvey(
              this.props.formValues,
              this.props.history
            )
          }
        >
          Send Survey
          <i className="material-icons right">
            email
          </i>
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

export default connect(mapStateToProps, {
  submitSurvey,
})(withRouter(SurveyFormReview));

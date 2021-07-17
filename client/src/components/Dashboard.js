import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSurveys, deleteSurvey } from "../actions";
import cardone from "./cardone.png";
import cardtwo from "./cardtwo.png";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getSurveys();
    }

    renderSurveys = () => {
		let counter = 1;
        if (this.props.surveys.length === 0)
            return (
                <h3 className="center">
                    Dashboard!You can add new surveys by clicking add button
                </h3>
            );
        return this.props.surveys.map((survey) => {
			counter ++;
            return (
				<div className="row" id="surveylist">
                <div className="card survey-card col s6" key={survey._id} style={{margin: "0", padding: "0"}}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={counter % 2 === 0 ? cardtwo: cardone} alt="card image"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            {survey.title}
                            <i className="material-icons right">more_vert</i>
                        </span>

                        <p className="right">
                            Sent On:{" "}
                            {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action card-footer">
                        <a class="btn-flat" disabled>
                            Yes: {survey.yes}
                        </a>
                        <a class="btn-flat" disabled>
                            No: {survey.no}
                        </a>
                        <button
                            className="btn-small waves-effect waves-light"
                            onClick={() => {
                                this.props.deleteSurvey(survey._id);
                            }}
                        >
                            Delete Survey
                        </button>
                    </div>
                    <div className="card-reveal" style={{padding: "0"}}>
                        <span className="card-title white-text blue-grey darken-3 center">
                            {survey.subject}
                            <i className="material-icons right">close</i>
                        </span>
                        <p className="card-title white-text blue-grey"> {survey.body}</p>
                    </div>
                </div>
				</div>
            );
        });
    };

    render() {
        return (
            <div className="container" >
                {this.renderSurveys()}
                <div className="fixed-action-btn">
                    <Link
                        className="btn-floating btn-large blue"
                        to="/surveys/new"
                    >
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { surveys: state.surveys || [] };
};

export default connect(mapStateToProps, { getSurveys, deleteSurvey })(
    Dashboard
);

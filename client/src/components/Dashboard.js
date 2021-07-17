import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSurveys, deleteSurvey } from "../actions";
import card from "./card.jpg";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getSurveys();
    }

    renderSurveys = () => {
        if (this.props.surveys.length === 0)
            return (
                <h3 className="center">
                    Dashboard!You can add new surveys by clicking add button
                </h3>
            );
        return this.props.surveys.map((survey) => {
            return (
                <div className="card" key={survey._id} style={{ width: "50%" }}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={card} />
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
                    <div className="card-action">
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
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            SUBJECT: {survey.subject}
                            <i className="material-icons right">close</i>
                        </span>
                        <p>BODY: {survey.body}</p>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="container">
                <div className="surveylist">{this.renderSurveys()}</div>
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

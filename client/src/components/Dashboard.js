import React from 'react';
import SurveyNew from './SurveyNew';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<div class="fixed-action-btn">
				<Link class="btn-floating btn-large blue" to="/surveys">
					<i class="large material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
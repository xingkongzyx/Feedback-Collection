import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
	return async (dispatch) => {
		const response = await axios.get(
			'https://emailyserver.run-us-west2.goorm.io/api/currentUser/'
		);
		console.log(response)
		dispatch({
			type: FETCH_USER,
			payload: response,
		});
	};
};
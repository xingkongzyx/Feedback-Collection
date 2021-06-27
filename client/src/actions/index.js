import axios from 'axios';
import { FETCH_USER } from './types';


// Action creator to fetch user from our backend server
export const fetchUser = () => {
	return async (dispatch) => {
// 		因为使用了proxy forward所以只填写了relative path
		const response = await axios.get('/api/currentUser');
		console.log(response)
		dispatch({
			type: FETCH_USER,
			payload: response,
		});
	};
};


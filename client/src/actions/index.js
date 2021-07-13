import axios from 'axios';
import { FETCH_USER } from './types';

// Action creator to fetch user from our backend server
export const fetchUser = () => {
	return async (dispatch) => {
		const response = await axios.get(
			'https://emailyserver.run-us-west2.goorm.io/api/current_user',
			{
				// 	axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决
				withCredentials: true,
			}
		);
		dispatch({
			type: FETCH_USER,
			payload: response.data,
		});
	};
};

// send the token to back end server and then get updated
// user model back. finally dispatch the user model to the reducer
export const handleToken = (token) => {
	return async (dispatch) => {
		const response = await axios.post(
			'https://emailyserver.run-us-west2.goorm.io/api/stripe',
			token,
			{ withCredentials: true }
		);

		dispatch({
			type: FETCH_USER,
			payload: response.data,
		});
	};
};

// send post request with form values filled by user
// on client side to the server side 
// and then kick user back to the dashboard
export const submitSurvey = (formValues, history) => {
	return async (dispatch) => {
		const response = await axios.post(
			'https://emailyserver.run-us-west2.goorm.io/api/surveys',
			formValues,
			{ withCredentials: true }
		);
		// 	navigate application to route /surveys
		history.push("/surveys");
		
		// 	backend 返回的是res.send(user) user是更新完credits后的user
		// 	直接发送到reducer中从而更新header
		dispatch({
			type: FETCH_USER,
			payload: response.data,
		});
	};

};
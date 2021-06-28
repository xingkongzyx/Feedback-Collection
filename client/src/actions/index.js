import axios from 'axios';
import { FETCH_USER } from './types';

// Action creator to fetch user from our backend server
export const fetchUser = () => {
	return async (dispatch) => {
		const response = await axios.get(
			'https://emailyserver.run-us-west2.goorm.io/api/current_user',
			{
// 				axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决
				withCredentials: true,
			}
		);
		dispatch({
			type: FETCH_USER,
			payload: response.data,
		});
	};
};
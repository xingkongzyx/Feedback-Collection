import { FETCH_USER } from '../actions/types';

const authReducer = (state = null, action) => {
	switch (action.type) {
// 		request is done,根据是否登录返回不同的值
// 		action.payload要不return user model要不""
// 		所以这里either return user model or false
		case FETCH_USER:
			return action.payload || false;
// 		application first boots up, request is not done
		default:
			return state;
	}
};

export default authReducer;


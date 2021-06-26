const authReducer = (state = {}, action)=>{
	switch (action.type){
		case "FETCH_USER": return {...state, isSignedIn: true};
		case "SIGN_OUT": return {...state, isSignedIn: false};
		default: return state
	}
}

export default authReducer;
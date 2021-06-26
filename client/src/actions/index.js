import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
	return (dispatch) => {
		axios.get('https://emailyserver.run-us-west2.goorm.io/api/currentUser').then((response) =>
			dispatch({
				type: FETCH_USER,
				payload: response,
			})
		);
	};
};

/*
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};

*/
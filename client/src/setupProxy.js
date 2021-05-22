// Remember the entire idea behind the proxy right here is to rewrite requests from localhost:3000/auth/google to localost:5000/auth/google. We have to do that because in our development world we are running the two servers.

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		['/api', '/auth/google'],
		createProxyMiddleware({
			target: 'http://emailyserver.run-us-west2.goorm.io',
		})
	);
};


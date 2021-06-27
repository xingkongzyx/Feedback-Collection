const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		['/api', '/auth/google'],
		createProxyMiddleware({
			target: 'https://emailyserver.run-us-west2.goorm.io',
			changeOrigin: true,
			router: {
				'https://emailyclient.run-us-west2.goorm.io/':
					'https://emailyserver.run-us-west2.goorm.io/',
			},
		})
	);
};
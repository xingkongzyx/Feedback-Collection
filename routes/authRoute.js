const passport = require('passport');

module.exports = (app) => {
	// 第二个参数代表我们想让passport处理后续的authentication操作，
	// 并使用上面已经定义的Google strategy.这里使用了google identifier
	// 代表上面的strategy
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			// scope代表我们想要获取user的哪些信息
			scope: ['email', 'profile'],
		})
	);

	// route handler for exchange code to get actual user profile
	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/currentUser', (req, res) => {
		res.send(req.session);
	});
	
	app.get('/logout', (req, res) => {
		req.logout()
		res.send("No user anymore", req.user);
	});
	
	app.get('/', (req, res) => {
		res.send('Hello, first deploy!');
	});
};
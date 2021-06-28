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
	app.get('/auth/google/callback', 
			passport.authenticate('google'), 
			(req,res)=>{
				res.redirect("https://emailyclient.run-us-west2.goorm.io/surveys")
	});

	app.get('/api/current_user', (req, res) => {
		
// 		The response needs set Access-Control-Allow-Origin's value to the domain you want to make XHR request from. 
		// res.header('Access-Control-Allow-Origin', 'https://emailyclient.run-us-west2.goorm.io');
		// res.header('Access-Control-Allow-Credentials', true);
		// res.header(
		// 	'Access-Control-Allow-Headers',
		// 	'Origin, X-Requested-With, Content-Type, Accept'
		// );
// 		send back the user
		res.send(req.user);
	});

	// 	go to this route to log out the user
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect("https://emailyclient.run-us-west2.goorm.io/landing")
	});

	app.get('/', (req, res) => {
		res.send('Hello, first deploy!');
	});
};
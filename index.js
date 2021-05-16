const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');

const app = express();

// 告诉passport用specific service(google)去处理authentication
// 内部有个identifier "google",后面用这个identifier确定使用这个strategy

passport.use(
	// 	new GoogleStrategy有两个参数,第一个是包含clientID以及密钥的object
	// 	第二个则是个callback function
	new GoogleStrategy(
		{
			// 	这里的第三个参数的意义是user在同意授权后被sent to的地址
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToke, refreshToken,profile) => {
			console.log("profile", profile);
		}
	)
);

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
app.get("/auth/google/callback", passport.authenticate("google"))


app.get('/', (req, res) => {
	console.log("keys")
	res.send({ words: 'hi there' });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('server start on PORT ', PORT);
});

// https://accounts.google.com/signin/oauth/error?authError=Cg9pbnZhbGlkX3JlcXVlc3QSKE1pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyOiByZWRpcmVjdF91cmkaN2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2lkZW50aXR5L3Byb3RvY29scy9vYXV0aDIgkAM%3D&client_id=830996874909-6kgj45ifm77t10kscjd6h4d2ssad2ojj.apps.googleusercontent.com
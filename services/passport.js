const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Get access to user model class
const User = mongoose.model('users');

// generate identifing token
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// take the id in cookie,and take it back to user model
passport.deserializeUser((userId, done) => {
	User.findById(userId).then((user) => {
		done(null, user);
	});
});

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
			proxy: true
		},
		(accessToke, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then((existingUser) => {
				if (existingUser) {
					// we already have a record with the given profile ID
					done(null, existingUser);
				} else {
					// we don't have a user record with this ID, make a new record!
					new User({ googleId: profile.id })
						.save()
						.then((user) => done(null, user))
				}
			});
		}
	)
);
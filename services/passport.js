const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("../config/keys")

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

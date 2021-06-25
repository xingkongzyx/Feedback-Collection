const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// 顺序很重要，先定义model class再使用它
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const app = express();

// instruct passport to make use of cookie to track authentication
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('server start on PORT ', PORT);
});
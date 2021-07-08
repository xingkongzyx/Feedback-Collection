const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');

const keys = require('./config/keys');
// 顺序很重要，先定义model class再使用它
require('./models/User');
require('./models/Survey');

require('./services/passport');


mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const app = express();

/****  以下为middlewares  ****/

// 避免CORS error
app.use(cors({
		credentials: true,
		origin: "https://emailyclient.run-us-west2.goorm.io"
}))

// 使用bodyParser middleware to parse the request payload
app.use(bodyParser.json())

// instruct passport to make use of cookie to track authentication
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
// use passport middleware for authentication
app.use(passport.initialize());
app.use(passport.session());

// wire up all route handlers
require('./routes/authRoute')(app);
require('./routes/billingRoute')(app);
require('./routes/surveyRoute')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('server start on PORT ', PORT);
});
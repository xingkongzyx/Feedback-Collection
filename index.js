const express = require('express');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").strategy;

const app = express();

// 告诉passport用specific service去处理authentication
passport.use(new GoogleStrategy())

app.get('/', (req, res) => {
	res.send({ words: 'hi there' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
	console.log("server start on PORT ", PORT)
});

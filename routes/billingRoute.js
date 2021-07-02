const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');
const chalk = require('chalk');

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		// 	create the actual charge, bill the credit, response back
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 for 5 credits',
			source: req.body.id,
		});
		console.log(chalk.yellow.bgGrey('Charged 5 dollars!'));
		// get a reference to the user model who just made the request
		// and update the credits
		req.user.credits += 5;
		// 	save it in the db
		const currentUser = await req.user.save();
		//	response with the updated user
		res.send(currentUser);
	});
};
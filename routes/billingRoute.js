const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
	app.post('/api/stripe', (req, res) => {
		// 	create the actual charge, bill the credit, response back
		stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 for 5 credits',
			source: req.body.id,
		}, function(err, charge){
			if(err){
				console.log(err);
			}
			console.log("******charge successfully******")
		});
	});
};
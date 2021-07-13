const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const chalk = require('chalk');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/template');

module.exports = (app) => {
	// 	route to handle user after they response to the email
	app.get('/api/surveys/thanks', (req, res) => {
		res.send('thank you!');
	});

	// 	route to create the survey and send it to recipients
	// 	through SendGrid
	app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;
		// create the new survey based on survey schema
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now(),
		});
		// create mailer instance and send the
		// survey to recipients via email
		const mailer = new Mailer(survey, template(survey));
		
		try {
			await mailer.send();
			console.log(chalk.white.bgGreen.bold(`Email sent to ${recipients}!`));
			// 	save the survey to the database
			await survey.save();
			// 	decrease 1 credit from user
			req.user.credits -= 1;
			// 	save the updated user model
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
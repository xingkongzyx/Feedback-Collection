const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/template');

module.exports = (app) => {
	// 	route to handle user after they response to the email
	app.get('/api/surveys/thanks', (req, res) => {
		res.send('thank you!');
	});

	// 	route to create the survey and send it to recipients
	app.post('/api/surveys', requireLogin, requireLogin, async (req, res) => {
		const { title, subject, body, recipients } = req.user;
		// create the new survey based on survey schema
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map((recipientEmail) => {
				email: recipientEmail.trim();
			}),
			_user: req.user.id,
			dateSent: Date.now(),
		});

		// create mailer instance and send the
		// survey to recipients via email
		const mailer = new Mailer(survey, template(survey));
		try {
			await mailer.send();
			// 	save the survey to the database
			await survey.save();
			// 	decrease 1 credit from user
			req.user.credits -= 1;
			// 	save the updated user model
			const user = await req.user.save();
		} catch (err) {
			res.status(422).send(err);
		}

		res.send(user);
	});
};
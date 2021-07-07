const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');
const Mailer = require("../services/Mailer")
const template = require("../services/emailTemplates/template")

module.exports = (app) => {
	app.post('/api/surveys', requireLogin, requireLogin, (req, res) => {
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
			dateSent: Date.now()
		});
		
		const mailer = new Mailer(survey, template(survey))
		mailer.send();	
	});
};


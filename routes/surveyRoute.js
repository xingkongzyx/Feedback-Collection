const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
	app.post('/api/surveys', requireLogin, requireLogin, (req, res) => {
		const { title, subject, body, recipients } = req.user;

		new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map((recipientEmail) => {
				email: recipientEmail.trim();
			}),
			_user: req.user.id,
			dateSent: Date.now()
		});
	});
};


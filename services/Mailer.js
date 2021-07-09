// Mailer class contains the setup code to communicate with sendgrid API
const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
const chalk = require('chalk');
class Mailer {
	/*****		sendgrid要求的setup code      *****/
	constructor({ subject, recipients }, content) {
		sgMail.setApiKey(keys.sendGridKey);
		this.msg = {
			to: recipients.map(({ email }) => email),
			from: 'zyx97agm@gmail.com',
			subject: subject,
			html: content,
			trackingSettings: { enable_text: true, enabled: true },
		};
	}

	//	communicate the entire mailer to sendgrid api
	async send() {
		const response = await sgMail.send(this.msg);
		return response;
	}
}

module.exports = Mailer;
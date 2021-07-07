// Create mailer object and then send it to sendGrid API
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		/*****		sendgrid要求的setup code      *****/
		this.sgApi = sendgrid(keys.sendGridKey);
		// 	4 properties that sendgrid needs to set up initially
		this.from_email = new helper.Email('no-reply@emaily.com');
		this.subject = subject;
		// 	some html to display in the email
		this.body = new helper.Content('text/html', content);
		//  recipients will be an array of formated email things
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body);
		// 	enable click tracking inside the email
		this.addClickTracking();
		this.addRecipients();
	}

	// 	helper functions:
	formatAddresses(recipients) {
		return recipients.map(({ email }) => {
			return new helper.Email(email);
		});
	}

	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new helper.Personalization();

		this.recipients.forEach((recipient) => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	// 	communicate the entire mailer to sendgrid api
	async send() {
		//	create sendgrid request
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON(),
		});
		//	send the request
		const response = this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
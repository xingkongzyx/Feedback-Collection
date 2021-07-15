const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [recipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	// 	set up relationship between user model
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	// 	the date that the survey was sent
	dateSent: Date,
	// 	latest time that someone voted on a given survey
	lastReponded: Date,
});

mongoose.model('surveys', surveySchema);

// 3.19
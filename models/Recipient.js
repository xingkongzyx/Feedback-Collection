// set up sub docuemnt for recipients in surveySchema
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
	email: String,
// 	has the user responded to the survey(true/false)
	responded: { type: Boolean, default: false },
});

module.exports = recipientSchema;
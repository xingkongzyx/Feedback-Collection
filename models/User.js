const mongoose = require('mongoose');
const { Schema } = mongoose;

// This file is to create User model class

const userSchema = new Schema({
	googleId: String,
});


mongoose.model("users" ,userSchema);
const express = require('express');
const keys = require("./config/keys")
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });


require('./services/passport');

const app = express();
require('./routes/authRoute')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('server start on PORT ', PORT);
});

// https://accounts.google.com/signin/oauth/error?authError=Cg9pbnZhbGlkX3JlcXVlc3QSKE1pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyOiByZWRpcmVjdF91cmkaN2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2lkZW50aXR5L3Byb3RvY29scy9vYXV0aDIgkAM%3D&client_id=830996874909-6kgj45ifm77t10kscjd6h4d2ssad2ojj.apps.googleusercontent.com
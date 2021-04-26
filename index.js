const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({ words: 'hi there' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
	console.log("server start on PORT ", PORT)
});
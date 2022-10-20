const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
	res.send('<h1>Auto scaling demo app</h1><h4>message: success</h4>');
})

app.listen(port, ()=> {
	console.log(`demo app is up and listening to port ${port}`);
})
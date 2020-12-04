     
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 
 
app.get('/twitch/webhook', (req, res) => { 
	res.send(req.query['hub.challenge'])
});
 
app.post('/twitch/webhook', (req, res) => {
    res.sendStatus(200)
});
 
app.listen(80, () => {
  console.log(`Example app listening at http://localhost:80`)
})
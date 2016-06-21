var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.get('/hello', function(req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
var fallback = require('express-history-api-fallback');
var express = require('express');
var path = require("path");
var compression = require('compression');
var app = express();
app.use(compression());

var root = __dirname + '/../client/public';

app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.get('/', function(req, res) {
    res.sendFile(path.join(root + '/index.html'));
});

app.get('/hello', function(req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
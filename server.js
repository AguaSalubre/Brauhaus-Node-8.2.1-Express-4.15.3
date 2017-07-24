var express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'static')))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/brauhaus.html'));
});

app.get('/gaststaette', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/gaststaette.html'));
});

app.get('/veranstaltungen', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/veranstaltungen.html'));
});

app.get('/stammtische', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/stammtische.html'));
});

app.get('/mediathek', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/mediathek.html'));
});

app.get('/shop', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/shop.html'));
});



app.listen(3000, function(){
    console.log('Server started on port 3000...')
});



var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 1111;

app.use('/images/', express.static(path.join(__dirname, './global_files/images')));

app.use('/dashboard', express.static(path.join(__dirname, './dashboard/public')));

app.get('/dashboard*', function(req, res) {
    res.sendfile('./dashboard/public/index.html');
});

app.listen(port);
console.log('http://localhost:' + port);
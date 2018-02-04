var express = require('express');
var app = express();
var port = process.env.PORT || 1234;
var path = require('path');
var mysql = require('mysql');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dbconfig = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': ''
    },
	'database': 'app',
    'users_table': 'users'
}
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

app.listen(port);
console.log('Server on port ' + port);

app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.setHeader('Access-Control-Allow-Origin', '*');
    connection.query('SELECT * FROM `' + dbconfig.users_table + '` WHERE (username = "' + username + '" OR email = "' + username + '") AND password = "' + password + '" AND active = "1"', function(err, data) {
        res.send(data);
    });
});


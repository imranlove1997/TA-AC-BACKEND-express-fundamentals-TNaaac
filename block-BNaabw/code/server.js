var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookies-parser');

var app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/project', (req, res) => {
    res.sendFile(__dirname + '/project.html')
})

app.get('/users/:username', (req, res) => {
    res.send(req.params.username);
})

app.use((req, res, next) => {
    res.sendFile(__dirname + '/error.html');
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
})
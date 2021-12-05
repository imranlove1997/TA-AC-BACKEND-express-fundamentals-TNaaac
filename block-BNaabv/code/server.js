var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded());

app.use((req, res, next) => {
    var cookie = req.cookies.count;
    if(cookie) {
        res.cookie('Count', Number(cookie) + 1);
    } else {
        res.cookie('Count', (cookie = 1));
    }
    next();
})

app.use('/admin', (req, res, next) => {
    next('Unauthorized');
})

app.get('/', (req, res) => {
    res.send('<h2>Welcome to express');
})

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
})

app.get('/users/:username', (req, res) => {
    res.send(req.params.username);
})

app.post('/form', (req, res) => {
    res.json(req.body);
})

app.post('/json', (req, res) => {
    res.send(req.body);
})

app.use((req, res, next) => {
    res.status(404).send('404 Page Not Found');
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
})
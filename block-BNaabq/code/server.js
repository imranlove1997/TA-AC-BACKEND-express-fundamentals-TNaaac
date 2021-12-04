var express = require('express');
var logger = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(cookieparser());

app.use('/about', (req, res ,next) => {
    res.cookie("username", "imran");
    next();
})

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Welcome');
})
app.get('/about', (req, res) => {
    console.log(req.cookies);
    res.send('Got cookies');
})
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
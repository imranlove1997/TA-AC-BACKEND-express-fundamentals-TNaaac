var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));



app.use((req, res, next) => {
    next();
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/new.html");
})

app.post('/new', (req, res) => {
        console.log(req.body);
        res.json(req.body);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
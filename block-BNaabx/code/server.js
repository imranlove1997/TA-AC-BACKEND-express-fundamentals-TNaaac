var express = require('express');

var app = express();
var store = '';

app.use((req, res, next) => {
    var current = new Date();
    console.log(req.method, req.url, current);
    next();
})

app.post('/json', (req, res) => {
    setTimeout(() => {
        res.send(req.body)
    }, 0);
    req.on('data', (chunk) => {
        store =+ chunk;
    });
    req.on('end', () => {
        req.body = JSON.parse(store);
    })
})

app.get('/stylesheet/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/stylesheet/style.css');
})

app.get('/images/img.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/images/img.jpg');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use((req, res, next) => {
    res.send('404 Page Not Found');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
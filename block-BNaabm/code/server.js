var express = require('express');

var app = express();

app.use('/', (req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})
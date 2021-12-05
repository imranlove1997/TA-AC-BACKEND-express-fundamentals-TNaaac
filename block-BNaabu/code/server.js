var express = require('express');

var app = express();

// middleware which throws err
app.use((req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "/admin") {
      return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
  });

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/about', (req, res) => {
    res.send('Welcome to about page');
})

app.use((req, res, next) => {
    res.send('404 Page Not Found');
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})
const express = require('express');
const appRouter = require('./private/router/index.js');
const app = express();
const port = 3000;

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.json())

// Especifica la carpeta donde se encuentran tus vistas HTML
app.set('views', __dirname + '/views');





//https handler
app.use(function (req, res, next) {
    let domain = `${req.protocol}://${req.hostname}`;
    if (!domain.includes('localhost')) {
        domain = domain.replace(/http/, 'https');
    }
    res.locals.domain = domain;

    next();
});

// router
app.use('/', appRouter);

// 404 handler
app.use(function (req, res, next) {
    console.log();
    errorPageHandler.notFoundPage(req, res, next);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
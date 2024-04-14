const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});

router.get('/', (req, res) => {
    let view = 'home';
    let model = {};

    model.title = 'Atelier';

    res.render(view, model);
});

module.exports = router;
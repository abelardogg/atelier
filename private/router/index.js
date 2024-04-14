const express = require('express');
const app = express();

const home = require('../controllers/home.js');
// const contact = require('../controllers/contact.js');
// const archive = require('../controllers/archive.js');
// const about = require('../controllers/about.js');
// const toolbox = require('../controllers/toolbox.js');
// const cheatbox = require('../controllers/cheatbox.js');


app
.use('/', home)
// .use('/contact', contact)
// .use('/archive', archive)
// .use('/about', about)
// .use('/toolbox', toolbox)
// .use('/cheatbox', cheatbox)


module.exports = app;
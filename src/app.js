const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const {executionAsyncResource} = require('async_hooks');

// Settings
app.set('port', 3000);
// Set directories to Express
app.set('views', path.join(__dirname, 'views'));
// Embedded JavaScript templating
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/routes'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

// 404 Handler
app.use((request, response, next) => {
  response.status(404).send('404 Not Found');
});

module.exports = app;

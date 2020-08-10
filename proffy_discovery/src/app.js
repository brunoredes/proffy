require('express-async-errors');
const express = require('express');
const nunjuncks = require('nunjucks');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

nunjuncks.configure('src/views', {
  express: app,
  noCache: true,
});

app.use(express.static('public'));
app.use(routes);

module.exports = app;

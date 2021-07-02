const express = require('express');
const morgan = require('morgan');
const categoriesRoutes = require('./routes/categories');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/categories', categoriesRoutes);

module.exports = app;
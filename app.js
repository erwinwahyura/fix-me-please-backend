const express = require('express');
const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});
var books = require('./routes/books');
var transactions = require('./routes/transactions');
var bodyParser = require('body-parser');

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

module.exports = app

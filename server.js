var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Routes = require('./routes')

mongoose.connect('mongodb://localhost/heroes-of-ajax');

var app = express();

// middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }),
bodyParser.json());

// routes
Routes(app);







app.listen(3000, () => {
  console.log('Server is running!')
});

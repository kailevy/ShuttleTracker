var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
// var favicon = require('serve-favicon');
var app = express();

var index = require('./routes/index');
var sightings = require('./routes/sightings.js');

var submit = require('./routes/submit.js');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname,'public/images/favicon.ico')));

app.get('/', index.home);
app.get('/sightings', sightings.sightings);


app.post('/submit', submit.submit);

mongoURI = process.env.MONGOURI || "mongodb://localhost";
mongoose.connect(mongoURI);

var PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});

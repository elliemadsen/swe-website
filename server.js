var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var indexRoute = require('./routes/index');

var aboutRoute = require('./routes/about');
var contactRoute = require('./routes/contact');
var eventsRoute = require('./routes/events');
var sponsorsRoute = require('./routes/sponsors');


app.use(cookieParser());
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/events', eventsRoute);
app.use('/sponsors', sponsorsRoute);


app.listen(2000, function () {
    console.log("Listening on port 2000");
})

module.exports = app;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

// Serve routes
var index = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');
var events = require('./routes/events');
var sponsors = require('./routes/sponsors');


app.use(cookieParser());
app.use('/', index);
app.use('/about', about);
app.use('/contact', contact);
app.use('/events', events);
app.use('/sponsors', sponsors);

app.listen(2000, function () {
    console.log("Listening on port 2000");
})

module.exports = app;
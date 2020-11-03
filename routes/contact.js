var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.urlencoded({
    extended: true
  }))

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/', 'contact.html'));
})

router.post('/submit-form', function(req, res) {
    res.send("Form submitted!");
})

module.exports = router;
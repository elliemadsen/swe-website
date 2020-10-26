var express = require('express');
var router = express.Router();
var path = require('path');

//Render homepage with index.html
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/', 'index.html'));
})

// Everything else gets directed to 404 page.
/*
router.get('/*', function (req, res) {
    res.send("404");
})
*/

module.exports = router;
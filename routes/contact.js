var express = require("express");
var router = express.Router();
var path = require("path");

router.use(
  express.urlencoded({
    extended: true,
  })
);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/", "contact.html"));
});

router.post("/submit-form", function (req, res) {
  Email.send({
    To: "swe@yourdomain.com",
    From: req.body.email,
    Subject: "Email from " + req.body.name,
    Body: req.body.message,
  }).then((message) => alert(message));
  console.log("mail was sent from" + req.body.name);
  res.send("Form submitted!");
});

module.exports = router;

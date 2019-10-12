var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    h1: 'Exterminated Sponsors',
    title: 'Express Demonstration'
  });
});

module.exports = router;
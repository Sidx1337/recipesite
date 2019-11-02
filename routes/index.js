var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'стул', body:'стол',price:200 });
});

module.exports = router;

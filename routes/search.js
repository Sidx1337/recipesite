var express = require('express');
var router = express.Router();

router.post('/ingredient', function(req, res, next) {
  //add db search here
  res.render('ingredient', {title: req.body.val});
});

router.post('/recipe', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

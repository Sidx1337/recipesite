const express = require('express');
const router = express.Router();
const connection = require('../libs/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = 'select * from ingredients;';
  connection.query(query, [], (err, result) => {
    res.render('index', { title: 'Рецепты', ingredients: result});
  });
});

module.exports = router;

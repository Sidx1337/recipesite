const express = require('express');
const router = express.Router();
const connection = require('../libs/database');

router.get('/', function(req, res, next) {
    res.render('login', {title: 'Рецепты - логин'});
});

module.exports = router;

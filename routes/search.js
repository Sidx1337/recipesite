const express = require('express');
const router = express.Router();
const connection = require('../libs/database');

router.post('/ingredients', function(req, res, next) {
  const ingredients = req.body.ingredients;
  const query = 'select recipes.id, recipes.title, recipes.description, recipes.image ' +
      'from recipes join recipes_ingredients ' +
      'on recipes_ingredients.recipe_id = recipes.id where recipes_ingredients.ingredient_id IN (?) ' +
      'group by recipes.id, recipes.title, recipes.description, recipes.image order by count(recipes_ingredients.ingredient_id) desc';
  connection.query(query, [ingredients, ingredients.length], (err, result) => {
    console.log(err);
    res.render('recipes', {title: 'Рецепты', recipes: result});
  });
});
router.get('/ingredients', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;

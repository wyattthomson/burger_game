var express = require('express');
var router = express.Router();
var burgerModel = require('../models/burger.js');

router.get('/', function(req, res) {
  res.redirect('/burgers.js');
});

router.get("burgers", function(req, res) {
  burgerModel.all(function(burgers) {
    res.render("index", { burger_list: burgers });
  });
});

router.post("/burgers/add", function(req, res) {
  burgerModel.create(req.body.burger_name, function(newBurger) {
    console.log(newBurger);
    res.redirect('/');
  });
});

router.put("/burgers/eat", function(req, res) {
  burgerModel.update(req.body.burger_name, function(newEaten) {
    console.log(burgerEaten);
    res.redirect('/');

    )}:
  )};

module.exports = router;
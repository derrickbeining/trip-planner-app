'use strict';

const db = require('../db')
const Sequelize = require("sequelize");

const Restaurant = db.define("restaurant", {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  cuisine: {
    type: Sequelize.STRING,
    notNull: true
  },
  price: {
    type: Sequelize.INTEGER,
    notNull: true
  }
});

Restaurant.hook("beforeValidate", function(restaurant) {
  if (restaurant.price > 5) restaurant.price = 5;
  if (restaurant.price < 1) restaurant.price = 1;
});

module.exports = Restaurant;

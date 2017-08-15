const db = require('../db')
const Sequelize = require("sequelize");

const Place = db.define("place", {
  address: {
    type: Sequelize.STRING,
    notNull: true
  },
  city: {
    type: Sequelize.STRING,
    notNull: true
  },
  state: {
    type: Sequelize.STRING,
    notNull: true
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    notNull: true
  }
});

module.exports = Place

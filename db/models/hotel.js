const db = require('../db')
const Sequelize = require("sequelize");

const Hotel = db.define("hotel", {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      isBetween1And5: value => {
        if (value < 1 || value > 5) {
          throw new Error("Rating out of range. Must be between 1 and 5.");
        }
      }
    }
  },
  ammenities: {
    type: Sequelize.STRING,
    notNull: true
  }
});

module.exports = Hotel;

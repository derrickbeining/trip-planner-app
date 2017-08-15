'use strict';

const db = require("../db");
const Sequelize = require("sequelize");

const Activity = db.define("activity", {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  age_range: {
    type: Sequelize.STRING,
    notNull: true
  }
});

module.exports = Activity;

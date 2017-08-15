'use strict';

const db = require('./db');
const Place = require('./models/place');
const Hotel = require('./models/hotel');
const Activity = require('./models/activity');
const Restaurant = require('./models/restaurant');


// ASSOCIATIONS /////////////////////////////////
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity
}

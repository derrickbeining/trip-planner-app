'use strict';

const express = require("express");
const router = express.Router();
const { Place, Hotel, Restaurant, Activity } = require('../db/index');

router.get("/", function(req, res, next) {
  renderWithAllData(req, res, next);
});

module.exports = router;

function renderWithAllData (req, res, next) {
  const fetchingHotels = Hotel.findAll();
  const fetchingRestaurants = Restaurant.findAll();
  const fetchingActivities = Activity.findAll();
  const fetchingPlaces = Place.findAll();
  Promise.all([
    fetchingHotels,
    fetchingRestaurants,
    fetchingActivities,
    fetchingPlaces
  ]).then(([ hotels, restaurants, activities, places ]) => {
    res.render("standard-views/home", {
      hotels, restaurants, activities, places
    });
  })
    .catch(next);
}

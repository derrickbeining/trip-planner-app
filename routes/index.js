const express = require( 'express' );
const router = express.Router();
var db = require( '../models' );
var Place = db.models.place;
var Hotel = db.models.hotel;
var Restaurant = db.models.restaurant;
var Activity = db.models.activity;

router.get( '/', function ( req, res ) {


  //var arrOfPromises = [Hotel.findAll({}), Place.f]
  let results = {};

  Hotel.findAll( {} )
    .then( hotels => {
      results.hotels = hotels;
      return Restaurant.findAll({})
    })
    .then(restaurants => {
      results.restaurants = restaurants;
      return Activity.findAll({});
    })
    .then(activities => {
      results.activities = activities;
      res.render( 'home', results );
    });

} );

module.exports = router;

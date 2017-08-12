const express = require( 'express' );
const router = express.Router();
const db = require( '../models' );
const Place = db.models.place;
const Hotel = db.models.hotel;
const Restaurant = db.models.restaurant;
const Activity = db.models.activity;

router.get( '/', function ( req, res ) {
  renderWithAllData( res );
} );

module.exports = router;

function renderWithAllData (res) {
  const results = {};
  Hotel.findAll( {} )
    .then( hotels => {
      results.hotels = hotels;
      return Restaurant.findAll( {} )
    } )
    .then( restaurants => {
      results.restaurants = restaurants;
      return Activity.findAll( {} );
    } )
    .then( activities => {
      results.activities = activities;
      res.render( 'home', results );
    } );
}


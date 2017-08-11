const express = require( 'express' );
const router = express.Router();
var db = require( '../models' );
var Place = db.models.place;
var Hotel = db.models.hotel;
var Restaurant = db.models.restaurant;
var Activity = db.models.activity;

router.get( '/', function ( req, res ) {
  Hotel.findAll( {} )
    .then( hotels => {
      res.render( 'home', {
        hotels: hotels
      } )

    } );
} );

module.exports = router;

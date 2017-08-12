const express = require( 'express' );
const router = express.Router();

function handleError ( err, req, res, next ) {
  console.log( err )
  res.render( 'error' )
}

module.exports = handleError;

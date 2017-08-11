const express = require( 'express' );
const Router = require( './routes' );
const app = express();
const db = require( './models' );
const nunjucks = require( 'nunjucks' );

const morgan = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );


app.set( 'view engine', 'html' );
app.engine( 'html', nunjucks.render );
nunjucks.configure( 'views', { noCache: true } );

app.use( morgan( 'dev' ),
  bodyParser.json(),
  bodyParser.urlencoded( { extended: true } ),
  express.static( path.join( __dirname, '/public' ) ),
  express.static( path.join( __dirname, '/node_module/jquery/dist' ) ),
  express.static( path.join( __dirname, '/node_modules/bootstrap/dist' ) ),
  Router,
  function ( err, req, res, next ) {
    console.log( err )
    res.render( 'error' )
  } );

const PORT = 3000;

db.sync()
  .then(() => {
    console.log( 'db synced!' );
    app.listen( PORT, function () {
      console.log( `server listening on port ${PORT}` );
    } );
  } );

//module.exports = app;

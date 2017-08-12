const express = require( 'express' );
const app = express();
const db = require( './models' );
const nunjucks = require( 'nunjucks' );
const http = require( 'http' );

const morgan = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const Router = require( './routes' );
const errorHandler = require( './routes/errors' )
const reload = require( 'reload' );

app.set( 'port', process.env.PORT || 1337 );
app.set( 'view engine', 'html' );
app.engine( 'html', nunjucks.render );
nunjucks.configure( 'views', {
  noCache: true,
  trimBlocks: true,
  lstripBlocks: true,
} );

app.use(
  morgan( 'dev' ),
  bodyParser.json(),
  bodyParser.urlencoded( { extended: true } ),
  express.static( path.join( __dirname, '/public' ) ),
  express.static( path.join( __dirname, '/node_modules/jquery/dist' ) ),
  express.static( path.join( __dirname, '/node_modules/bootstrap/dist' ) ),
  Router,
  errorHandler
);

reload( app, {
  verbose: true
} );

const server = http.createServer( app );
const PORT = 3000;
db.sync()
  .then(() => {
    console.log( 'db synced!' );
    server.listen( app.get('port'), function () {
      console.log( 'server listening on port ' + app.get('port') );
    } );
  } );


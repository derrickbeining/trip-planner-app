const express = require('express');
const Router = require('./routes');
const app = express();
const db = require('./models');
const nunjucks = require('nunjucks');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(Router);
app.use(function (err, req, res, next) {
  console.log(err);
  res.render('error');
});

const PORT = 3000;

db.sync()
.then(() => {
  console.log('db synced!');
  app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`);
  });
});

//module.exports = app;

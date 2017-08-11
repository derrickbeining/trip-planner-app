const express = require('express');
const app = express();
const router = express.Router();
const db = require('../models');
const nunjucks = require('nunjucks');


router.get('/', function(res, req) {
    console.log("home page");
    res.render('home');
  });

module.exports = router;

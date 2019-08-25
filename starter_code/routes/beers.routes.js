const express = require('express');
const { index, routeBeers, routeRandomBeers } = require('../controlers/beersRoutes.controler');

const router = express();

router.get('/', index);

router.get('/beers', routeBeers);

router.get('/random-beers', routeRandomBeers);

module.exports = router;

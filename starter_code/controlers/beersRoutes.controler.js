const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

const index = (req, res) => {
  res.render('index');
};

const routeBeers = async (req, res) => {
  try {
    const allBeers = await punkAPI.getBeers();
    res.render('beers-view', { allBeers });
  } catch (err) {
    console.log(err);
  }
};

const routeRandomBeers = async (req, res) => {
  try {
    const randomBeers = await punkAPI.getRandom();
    res.render('randomBeers-view', randomBeers[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
  routeBeers,
  routeRandomBeers,
};

const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create: create,
    index: index,
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new'); //if there's an error, re-render the form - console.log the error
        console.log(flight);
        res.redirect('/flights'); //else, redirect to flights/new with a new form
    });
}

function index(req, res) {
    Flight.find({}, function(err, allFlights) {
        res.render('flights/index', {flights: allFlights});
    });
}
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create: create,
    index: index,
    show: show,
}

function newFlight(req, res) { //displays new flight form
    res.render('flights/new');
}

function create(req, res) { //handles new flight form submission
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new'); //if there's an error, re-render the form - console.log the error
        console.log(flight);
        res.redirect('/flights'); //else, redirect to flights/ with a new form
    });
}

function index(req, res) {
    Flight.find({}, function(err, allFlights) {
        res.render('flights/index', {flights: allFlights}); //flights/index is 404
    });
}

function show(req, res) {
    // res.render('flights/show', {
    //     flight: Flight.getOne(req.params.id)
    // });
    Flight.findById(req.params.id, function(err, flight) {
        if (err) {
            return res.redirect('/flights');
        }
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets})
        });
    });
}


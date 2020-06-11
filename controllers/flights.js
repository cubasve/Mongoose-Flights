const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create: create,
    index: index,
    show: show,
}

function newFlight(req, res) { 
    res.render('flights/new');
}

function create(req, res) { 
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new'); 
        console.log(flight);
        res.redirect('/flights'); 
    });
}

function index(req, res) {
    Flight.find({}, function(err, allFlights) {
        res.render('flights/index', {flights: allFlights}); 
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) {
            return res.redirect('/flights');
        }
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets})
        });
    });
}


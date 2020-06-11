const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    newTicket, //new: newTicket was creating an error 
    create, //create: create was creating an error too so I removed both - it's working
}

function newTicket(req, res) {
    res.render('flights/:id/tickets/new', {
        title: 'New Ticket',
        tickets: req.params.id
    });
    // Flight.findById(req.params.id, function(err, flight) {
    //     res.render('tickets/new', {flight})
    // });
    // Ticket.find({}, function(err, tickets) {
    //     res.render('/flights/tickets/new', {
    //         title: 'Add Ticket',
    //         tickets,
    //     });
    // });
}

function create(req, res) {
    req.body.flight = req.params.id;
    const newTicket = new Ticket(req.body);
    newTicket.save(function(err) {
        if (err) return res.redirect(`/flights/${req.params.id}/tickets/new`);
        console.log(newTicket);
        res.redirect(`/flights/${req.params.id}`);
    });
}


// function newFlight(req, res) { //displays new flight form
//     res.render('flights/new');
// }

// function create(req, res) { //handles new flight form submission
//     const flight = new Flight(req.body);
//     flight.save(function(err) {
//         if (err) return res.render('flights/new'); //if there's an error, re-render the form - console.log the error
//         console.log(flight);
//         res.redirect('/flights'); //else, redirect to flights/new with a new form
//     });
// }
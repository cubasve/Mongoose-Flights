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

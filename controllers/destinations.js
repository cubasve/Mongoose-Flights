const Flight = require('../models/flight');

module.exports = {
    create: createDestinations,
}

function createDestinations(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

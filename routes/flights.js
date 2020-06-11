const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index); //GET /flights 
router.get('/new', flightsCtrl.new); //GET /flights/new --> displays a new flight form
router.post('/', flightsCtrl.create); //POST /flights - handles form submission of flight form
router.get('/:id', flightsCtrl.show); //GET /flights/:id --> targets a specific flight

// router.post('/:id', flightsCtrl.destination); //POST /flights/:id --> 
// router.post('/:id/ticket', flightsCtrl.ticket); //POST /flights/:id/ticket --> 

module.exports = router;

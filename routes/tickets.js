const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id/tickets/new', ticketsCtrl.newTicket); //POST /flights/:id/ticket/new --> 
router.post('/:id/tickets/new', ticketsCtrl.create); //POST /flights/:id/ticket/new --> 

module.exports = router;
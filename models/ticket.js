const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/, //Must be 'A1' through 'F99'
    },
    price: {
        type: Number,
        min: 0,
    },

    flight: {
        type: Schema.Types.ObjectId, //type: ObjectId won't work 
        //type: mongoose.Schema.Types.ObjectId - no need since mongoose.Schema = Schema (line 2)
        ref: 'Flight', //enables population
    },
});

module.exports = mongoose.model('Ticket', ticketSchema);
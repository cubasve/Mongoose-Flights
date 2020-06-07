const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const flightSchema = new Schema ({ //define schema
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
});

module.exports = mongoose.model('Flight', flightSchema); //compile schema into model
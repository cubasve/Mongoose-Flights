const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const flightSchema = new Schema ({ //define schema
    airline: String,

    airport: {type: String, default: 'DEN'},

    flightNo: {type: Number, required: true, 
        default: function() {
            return new Date().getFullYear();
        },
        min: 10,
        max: 9999,
    },
    
    departs: {type: Date, 
        default: function() {
            return new Date().getFullYear();
        },
    },
});

module.exports = mongoose.model('Flight', flightSchema); //compile schema into model
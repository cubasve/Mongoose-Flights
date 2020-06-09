const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const destinationSchema = new Schema ({ //subdocument
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
})



const flightSchema = new Schema ({ //define schema
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United']
    },

    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        default: 'DEN'
    },

    flightNo: { //not sure about min and max 
        type: Number, 
        required: true, 
        min: 10,
        max: 9999,
    },
    
    departs: {
        type: Date,  //not sure about default
        default: function() {
            return Date.now() + 365;
            // return new Date().getFullYear();
        },
    },

    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema); //compile schema into model
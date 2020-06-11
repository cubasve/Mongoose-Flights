const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const destinationSchema = new Schema ({ 
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
});

const flightSchema = new Schema ({ 
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United'],
    },

    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        default: 'DEN',
    },

    flightNo: { 
        type: Number, 
        required: true, 
        min: 10,
        max: 9999,
    },
    
    departs: {
        type: Date,  
        default: function() {
            // return Date.now() + 365;
            // return new Date().getFullYear();
            Date.now() + 365 * 24 * 60 * 60000; //365 days x 24 hours x 60 minutes x 60000 seconds
        },
    },

    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);

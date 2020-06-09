const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const destinationSchema = new Schema({ //subdocument
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: Date,
})



const flightSchema = new Schema ({ //define schema
    airline: {type: String, enum: ['American', 'Southwest', 'United']},

    airport: {type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        default: 'DEN'},

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

    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema); //compile schema into model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    arrival: Date
    },
    {
        timestamps: true
    })
 
var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },   
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: Date
    ,
    tickets: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Ticket'
        }
      ],
    destinations: [destinationSchema]   
    }, 
    {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);
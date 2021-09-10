const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({

    eventName: {type: String, required: [true, "eventName cannot be empty"]}, 
    organizer: {type: String, required: [true, "eventName cannot be empty"]}, 
    description: {type: String, required: [true, "eventName cannot be empty"]}, 
    location: {type: String, required: [true, "eventName cannot be empty"]}, 
    date: {type: Date, required: [true, "date of event cannot be empty"]},
    eligibility: {type: String}, 
    winners: [{
        name: String,           // already required from gql schema -> String!
        position: Number,
    }], 

});

module.exports = mongoose.model('Event', eventSchema);

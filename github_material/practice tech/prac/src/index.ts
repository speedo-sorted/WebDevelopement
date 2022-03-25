import mongoose from "mongoose";


import Event from "./model/event";

mongoose.connect('mongodb://localhost:27017/eveprac', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
})

const data =[ {
    eventName: "II build", 
    organizer: "IIIT kota", 
    date:"2021-09-18T16:00:00Z",                                     
    description: "Build strong tech. community around you", 
    location: "online", 
    eligibility: "everyone",
    
    
}];

const addEvent = async () => {

    let newEvent = data;

    await Event.insertMany(newEvent);

    console.log("Inserted!!!!!!")

}

const findEvent = async () => {

    let logs = await Event.find();
    console.log(logs);
}

addEvent();
// findEvent();
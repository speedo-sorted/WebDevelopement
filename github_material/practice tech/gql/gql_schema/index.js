const {ApolloServer, gql} = require('apollo-server');
const mongoose = require('mongoose');
const Event = require('../mongoose_schema/events')

// mongodb connection

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Yeah! mongoose connected"))
.catch(e => console.log(e));




// data 
const eventData = [

    {
        eventName: "community build", 
        organizer: "IIIT kota", 
        date:"2021-09-18T16:00:00Z",                                     
        description: "Build strong tech. community around you", 
        location: "online", 
        eligibility: "everyone",
        
        
    },
    {
        eventName: "code chronicles 1.0", 
        organizer: "IIIT Kota", 
        date: "2021-12-08T01:30:00Z",                               
        description: "A all in one coding event", 
        location: "online", 
        winners: [
            {
                position: 1, 
                name: "Josh",
            },
            {
                position: 2, 
                name: "Shaun"
            }
        ], 
        eligibility: "everyone",
    }, 
    {
        eventName: "code mania", 
        organizer: "IIIT Nagpur", 
        date: "2021-09-18T05:00:00Z",                                   
        description: "HACKATHON for all", 
        location: "online", 
        winners: [
        ], 
        eligibility: "everyone",
    }, 
    {
        eventName: "internship for all", 
        organizer: "IIIT Kota", 
        date: "2020-10-30T23:00:00Z",                                                    
        description: "A exhaustive guide for internship, training and planning", 
        location: "IIIT Kota", 
        winners: [
        ], 
        eligibility: "everyone",
    }
];



// use this variable to define event type in input and normal object

// const eventType = `                           
//     eventName: String!
//     organizer: String!
//     date: String!
//     description: String! 
//     location: String! 
//     winners: [Participant]

// `;



// gql schema 

const typeDefs = gql`

    type Participant {

        name: String! 
        position: Int
    }
    input ParticipantInput {
        name: String! 
        position: Int
    }

    type Event {
        eventName: String!
        organizer: String!
        description: String! 
        date: String!               #  "2016-05-18T16:00:00Z"  date format in UTC
        location: String! 
        winners: [Participant]
        eligibility: String!
    }
    input eventInput {
        eventName: String!
        organizer: String!
        description: String! 
        date: String!
        location: String! 
        eligibility: String!
        winners: [ParticipantInput]
    }

    type Query {

        allEvents: [Event!]
        upcommingEvents: [Event!]
        event(name: String!): Event
        
    }
    
    type Mutation {

        addEvent(event: eventInput!): Event!
        addEvents(events: [eventInput!]): [Event!]!
        updateEvent(name: String!, event: eventInput! ): Event!
        deleteEvent(name: String!): Event!

    }

`;


// gql resolvers
const resolvers = {
    Event: {
        eventName: async (root) => {
            return root.eventName + "hello";
        }
    }
    ,
    Query: {

        allEvents: async () => {
            let events = await Event.findMany({});
            console.log(events);
            return events;
        }, 

        event: async (_, args) => {

            try{
                let event = await Event.findOne({eventName: args.name });
            console.log(event);
            return event;
            }
            catch(e){
                console.log(e);
            }
        }, 

        upcommingEvents: async () => {

            let dateNow = Date();
            const events = await Event.find({ date: { $gt: dateNow } });
            console.log(events);
            return events;
        }
    },
    Mutation: {
        addEvent: async (root, args) => {
            // make class for event to create event object
            let newEvent = args.event;
            
            let event = new Event(newEvent);
            await event.save();
            console.log("DATA SAVED", event);
            return event;
        
        },
        addEvents: async(root, args) => {

            let newEvents = args.events;

            let events = await Event.insertMany(newEvents);

            console.log("DATA SAVED", events);
            return events;
        
        }, 
        updateEvent: async (root, args) => {

            const query = {eventName: args.name};
            const event = await Event.findOneAndUpdate(query, args.event, {new: true});
            console.log("DATA UPDATED", event);
            return event;
        
        }, 
        deleteEvent: async (root, args) => {
            const query = {eventName: args.name};
            const event = await Event.findOne(query);
            await Event.deleteOne(query);
            return event;
        },
    }
}; 



// gql server connect

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => console.log(`server started at port ${url}`));

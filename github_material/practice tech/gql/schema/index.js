const {ApolloServer, gql} = require('apollo-server');

// 1. create a schema also called typeDefs and provide gql ``, which parse string

const eventData = [

    {
        eventName: "community build", 
        organizer: "IIIT kota", 
        date:20211212,                                     
        description: "Build strong tech. community around you", 
        location: "online", 
        
        
    },
    {
        eventName: "code chronicles 1.0", 
        organizer: "IIIT Kota", 
        date: 20210905,                                  // represents date 2021 - 09 - 05 i.e 5 sept 2021
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
        
    }, 
    {
        eventName: "code mania", 
        organizer: "IIIT Nagpur", 
        date: 20211212,                                     // 12 december
        description: "A web developement hackathon", 
        location: "online", 
        winners: [
        ], 
        
    }, 
    {
        eventName: "internship for all", 
        organizer: "IIIT Kota", 
        date: 20201130,                                                     // 30 nov
        description: "A exhaustive guide for internship, training and planning", 
        location: "IIIT Kota", 
        winners: [
        ], 
        
    }
];

// const eventType = `
//     eventName: String!
//     organizer: String!
//     date: Int!
//     description: String! 
//     location: String! 
//     winners: [Participant]

// `;

const typeDefs = gql`

    type Participant {

        name: String! 
        position: Int
    }

    type Event {
        eventName: String!
        organizer: String!
        date: Int!
        description: String! 
        location: String! 
        winners: [Participant]
    }
    input eventInput {
        eventName: String!
        organizer: String!
        date: Int!
        description: String! 
        location: String! 
    }

    type Query {

        allEvents: [Event!]
        upcommingEvents: [Event!]
        event(name: String!): Event
        
    }
    
    type Mutation {

        addEvent(event: eventInput!): Event!
        updateEvent(name: String! ): Event!

    }

`;

const resolvers = {
    Query: {

        allEvents: () => {
            return eventData;
        }, 

        event: (_, args) => {
            let foundEvent = eventData.filter(el => el.eventName === args.name)[0];
            return foundEvent ? foundEvent : null;
        }, 

        upcommingEvents: () => {
            let nowDate = new Date();

            let yearNow = nowDate.getFullYear().toString();

            let monthNow = (nowDate.getMonth() + 1).toString();              // 1 added to make jan-1, feb-2 from jan-0, feb-1
            if(monthNow.length === 1)   monthNow = "0" + monthNow;                  // prefix '0' for single digit month

            let dateNow = nowDate.getDate().toString(); 
            if(dateNow.length === 1) dateNow = "0" + dateNow;

            let currentDate = yearNow + monthNow + dateNow;

            return eventData.filter(el => el.date >= currentDate)

        }
    },
    Mutation: {
        addEvent: (root, args) => {
            // make class for event to create event object
            let newEvent = args.event;
            newEvent.winners = [];
            eventData.push(newEvent);
            return newEvent;
        }
    }
}; 

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => console.log(`server started at port ${url}`));
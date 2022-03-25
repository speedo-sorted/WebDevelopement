import "reflect-metadata";
import { Arg, Mutation, Query, Resolver } from "type-graphql";


import { Event, EventModel } from "../entities/event"; 
import { EventInput } from "./types/event-input";

@Resolver(Event)
export class EventResolver {

    // @FieldResolver()
    // async participants (@Root() event: Event) {
    //     console.log(event);
    //     let participantArray = JSON.stringify(event.participants);
    //     if(participantArray && participantArray?.length > 0){
    //         return participantArray;
    //     }
    //     return undefined;
    // }

    @Query( () => [Event], {nullable: true} )
    async allEvents (): Promise<Event[]> {

        let events = await EventModel.find({});
        console.log(events);
        return events;

    }

    @Query(() => Event, {nullable: true} )
    async event (@Arg("name") name: string )
    : Promise< Event | null >  {

            let event = await EventModel.findOne({eventName: name });
            console.log(event);
            return event;
    }

    @Query(() => [Event], {nullable: true} )
    async upcommingEvents (): Promise<Event[]> {

        let dateNow: Date = new Date();
        const events: Event[] = await EventModel.find({ date: { $gt: dateNow } });

        console.log(events);
        return events;
    }

    @Mutation(() => Event)
    async addEvent (@Arg("event", () => EventInput) event: EventInput ): Promise<Event> {
        // make class for event to create event object
        await EventModel.create(event);

        console.log("DATA SAVED", event);

        return event;
    
    }

    @Mutation(() => [Event] )
    async addEvents (@Arg("events", () => [EventInput]) events: EventInput[] ): Promise<Event[]> {


        let newEvents = await EventModel.insertMany(events);

        console.log("DATA SAVED", newEvents);
        return events;   
    
    }

    @Mutation(() => Boolean )
    async updateEvent (@Arg("name") name: string, 
                        @Arg("event", () => EventInput) event: EventInput
                        ): Promise<Boolean> {

        const query = {eventName: name};

        const updatedEvent = await EventModel.findOneAndUpdate(query, event, {new: true});
        if(updatedEvent){
            console.log("DATA UPDATED", updatedEvent);
            return true;
        }
                    
        return false;
    }

    @Mutation(() => Boolean )
    async deleteEvent (@Arg("name") name: string):
                        Promise<Boolean> {

        const query = {eventName: name};

        let result = await EventModel.findOneAndDelete(query);
        if(result){
            console.log("event deleted");
            return true;
        }
        return false;
    }

}
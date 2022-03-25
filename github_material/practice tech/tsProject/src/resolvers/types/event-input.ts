import "reflect-metadata";
import { InputType, Field } from "type-graphql";


import { Event } from "../../entities/event";
import ParticipantInput from "./participant-input";


@InputType()
export class EventInput implements Partial<Event> {

    @Field()
    // eventName: Event["eventName"];
    eventName: string;

    @Field(() => String)
    organizer: string;

    @Field()
    description: string;

    @Field()
    location: string;

    @Field()
    date: Date;

    @Field()
    duration: string;

    @Field({ nullable: true })
    registrationEnd?: Date;

    @Field( { nullable: true })
    eligibility?: string;

    @Field(() => [ParticipantInput], { nullable: true })
    participants?: ParticipantInput[];


}
import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";


import Participant  from "./participant";
import { Ref } from "../types";



@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
@ObjectType({description: "Event model"})
export class Event {

    @prop({ required: true})
    @Field()
    eventName: string;   

    @prop({required: [true, "eventName cannot be empty"]})
    @Field(() => String)
    organizer: string;

    @prop({required: [true, "description cannot be empty"]}, )
    @Field()
    description: string;

    @prop( {required: [true, "location cannot be empty"]} )
    @Field()
    location: string;

    @prop({required: [true, "date of event cannot be empty"]})
    @Field()
    date: Date;

    @prop({required: [true, "duration cannot be empty"]})
    @Field()
    duration: string;

    @prop()
    @Field({nullable: true})
    registrationEnd?: Date;

    @prop()
    @Field( { nullable: true })
    eligibility?: string;

    @prop({ type: () => [Participant] })
    @Field(() => [Participant], { nullable: "itemsAndList" })
    participants?: Ref<Participant>[];

}

export const EventModel = getModelForClass(Event);
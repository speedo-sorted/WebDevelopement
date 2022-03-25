import { getModelForClass, prop } from "@typegoose/typegoose";



import Winner from "../types/winner"

class Event {

    @prop({type: () => String, required: true} )
    eventName!: string; 

    @prop({ required: true })
    organizer!: string;

    @prop({ required: true })
    description!: string; 

    @prop({ required: true })
    location!: string;

    @prop({ required: true })
    date!: Date;

    @prop({ required: true })
    eligibility!: string; 

    @prop({ type: () => Winner })
    winners?: Winner[];

}


export default getModelForClass(Event);

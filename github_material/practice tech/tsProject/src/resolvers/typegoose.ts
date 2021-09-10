import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType } from "type-graphql";


class Winners {
    @prop()
    name!: string; 

    @prop()
    position?: number;
}

@ObjectType()
class Event {

    @prop({ type: () => String, required: true})
    public eventName!: string;   
    
    @prop({type: String, required: [true, "eventName cannot be empty"]})
    public organizer!: string;

    @prop({type: String, required: [true, "eventName cannot be empty"]}, )
    public description!: string;

    @prop( {type: String, required: [true, "eventName cannot be empty"]} )
    public location!: string;

    @prop({type: Date, required: [true, "date of event cannot be empty"]})
    public date!: Date;

    @prop({type: String})
    public eligibility?: string;

    @prop({ type: () => [Winners] } )
    public winners?: [Winners];

}

const eventModel = getModelForClass(Event);
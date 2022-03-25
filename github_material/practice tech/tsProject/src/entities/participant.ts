import { Field, ObjectType } from "type-graphql";
import {prop} from "@typegoose/typegoose";

@ObjectType()
class Participant{

    @prop({type: () => String})
    @Field()
    name!: string;

    @prop({type: () => Number})
    @Field({nullable: true})
    position?: number;

    @prop()
    @Field()
    email!: string;
}
export default Participant;

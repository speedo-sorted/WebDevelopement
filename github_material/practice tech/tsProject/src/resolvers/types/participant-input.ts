import { Field, InputType } from "type-graphql";


import Participant from "src/entities/participant";

@InputType()
class ParticipantInput implements Partial<Participant> {

    // @prop({type: () => String})
    @Field()
    // name!: Participant["name"];
    name!: string;

    // @prop({type: () => Number})
    @Field({nullable: true})
    position?: number;

    @Field()
    email!: string;
}
export default ParticipantInput;
import {getModelForClass, prop} from "@typegoose/typegoose";

class Winner{

    // @prop({type: () => String})
    name!: string;

    // @prop({type: () => Number})
    position!: number;

}
export default Winner;
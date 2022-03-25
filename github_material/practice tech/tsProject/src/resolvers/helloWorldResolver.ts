import "reflect-metadata";
import { Arg, Query, Resolver } from "type-graphql";



@Resolver()
export default class {

    @Query( () => String)
    async sayHello(
        @Arg("name") name: string
    ) {
        return `hello ${name}`;
    }

}
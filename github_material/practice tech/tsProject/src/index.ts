import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import eventResolver from "./resolvers/eventResolver";


const main = async () => {

    const schema = await buildSchema({

        resolvers: [eventResolver],

    });

    const apolloServer = new ApolloServer({schema});
    await apolloServer.start(); 

    const app = Express();

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("Yeah server started")
    });
    
}

main();
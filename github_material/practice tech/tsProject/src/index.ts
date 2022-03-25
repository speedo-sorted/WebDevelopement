import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";


import { EventResolver } from "./resolvers/eventResolver";



const main = async () => {

    const schema = await buildSchema({

        resolvers: [EventResolver],
        emitSchemaFile: true,
        validate: false,

    });

    // mongodb connection
    const url = "mongodb://localhost:27017/gql";

    const mongoose = await connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    await mongoose.connection;


    const apolloServer = new ApolloServer({schema});
    await apolloServer.start(); 

    const app = Express();

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("Yeah server started")
    });
    
}

main().catch(e => {console.log(e)});
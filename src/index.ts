import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post"
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { PostResolver } from "./resolvers/post";
import { AdminResolver } from "./resolvers/admin";
import { readdirSync } from "fs";
import { ArtPosts } from "./resolvers/artPosts";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();

    app.use(express.static(__dirname + '/../content'));

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PostResolver, AdminResolver, ArtPosts],
            validate: false,
        }),
        context: () => ({ em: orm.em })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("start server on port 4000")
    })

}

main().catch((err) => { console.error(err) });


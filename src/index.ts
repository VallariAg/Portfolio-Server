import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { PostResolver } from "./resolvers/post";
import { AdminResolver } from "./resolvers/admin";
import { ArtPosts } from "./resolvers/artPosts";
import { TimelineResolver } from "./resolvers/timeline";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();

    app.use(express.static(__dirname + '/../content'));

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PostResolver, AdminResolver, ArtPosts, TimelineResolver],
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


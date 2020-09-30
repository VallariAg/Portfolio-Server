import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    dbName: "blogs",
    user: "postgres",
    password: "postgres",
    entities: [Post],
    type: "postgresql",
    debug: !__prod__,
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
} as Parameters<typeof MikroORM.init>[0];

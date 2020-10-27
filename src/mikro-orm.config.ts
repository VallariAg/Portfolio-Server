import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Timeline } from "./entities/Timeline";

export default {
    dbName: "blogs",
    user: "postgres",
    password: "postgres",
    entities: [Post, Timeline],
    type: "postgresql",
    debug: !__prod__,
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
} as Parameters<typeof MikroORM.init>[0];

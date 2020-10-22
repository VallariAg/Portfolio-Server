import { Resolver, Query } from "type-graphql";
import { readdirSync } from "fs";


@Resolver()
export class ArtPosts {
    @Query(() => [String])
    getArtPosts(): String[] {
        let files = readdirSync(__dirname + "/../../content/art");
        return files;
    }

}

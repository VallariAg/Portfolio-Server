import { Resolver, Query } from "type-graphql";


@Resolver()
export class AdminResolver {
    @Query(() => String)
    getPassword(): String {
        return "77af778b51abd4a3c51c5ddd97204a9c3ae614ebccb75a606c3b6865aed6744e";
    }

}

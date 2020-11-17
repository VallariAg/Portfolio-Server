import { Timeline } from "../entities/Timeline";
import { Resolver, Query, Ctx, Mutation, Arg } from "type-graphql";
import { MyContext } from "src/types";
// import { QueryOrder } from "@mikro-orm/core";
import { QueryOrder } from "@mikro-orm/core/enums";


@Resolver()
export class TimelineResolver {
    @Query(() => [Timeline])
    allContent(@Ctx() { em }: MyContext): Promise<Timeline[] | null> {
        return em.find(Timeline, {}, { orderBy: { time: QueryOrder.DESC } });
    }

    @Mutation(() => Timeline, { nullable: true })
    async createContent(
        @Arg('title') title: string,
        @Arg('time') time: string,
        @Arg('body') body: string,
        @Arg('description') description: string,
        @Ctx() { em }: MyContext
    ): Promise<Timeline> {
        let timeDate: Date = new Date();
        if (typeof description == 'undefined') { description = "" }
        if (typeof body == 'undefined') { body = "" }
        if (typeof time != 'undefined') { timeDate = new Date(time) }
        const newContent = em.create(Timeline, { title, description, body, timeDate });
        await em.persistAndFlush(newContent);
        return newContent;
    }

    @Mutation(() => Timeline, { nullable: true })
    async updateContent(
        @Arg('id') id: number,
        @Arg('time') time: string,
        @Arg('title', () => String, { nullable: true }) title: string,
        @Arg('body', () => String, { nullable: true }) body: string,
        @Arg('description', () => String, { nullable: true }) description: string,
        @Ctx() { em }: MyContext
    ): Promise<Timeline | null> {
        const content = await em.findOne(Timeline, { id });
        if (!content) {
            return null;
        }
        if (typeof title != 'undefined') {
            content.title = title;
        }
        if (typeof time != 'undefined') {
            content.time = new Date(time);
        }
        if (typeof body != 'undefined') {
            content.body = body;
        }
        if (typeof description != 'undefined') {
            content.description = description;
        }

        await em.persistAndFlush(content)
        return content;
    }


    @Mutation(() => Boolean)
    async deleteContent(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext
    ): Promise<boolean> {
        try {
            await em.nativeDelete(Timeline, { id });
            return true;
        } catch (e) {
            return false;
        }
    }
}


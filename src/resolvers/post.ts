import { Resolver, Query, Ctx, Arg, Int, Mutation } from "type-graphql";
import { MyContext } from "../types";
import { Post } from "../entities/Post";

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(@Ctx() { em }: MyContext): Promise<Post[] | null> {
        return em.find(Post, {});
    }

    @Query(() => Post, { nullable: true })
    post(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: MyContext
    ): Promise<Post | null> {
        return em.findOne(Post, { id });
    }

    @Mutation(() => Post, { nullable: true })
    async createPost(
        @Arg('title') title: string,
        @Arg('body', () => String, { nullable: true }) body: string,
        @Arg('description', () => String, { nullable: true }) description: string,
        @Ctx() { em }: MyContext
    ): Promise<Post> {
        if (typeof description == 'undefined') { description = "" }
        if (typeof body == 'undefined') { body = "" }
        const post = em.create(Post, { title, body, description })
        await em.persistAndFlush(post)
        return post;
    }


    @Mutation(() => Post, { nullable: true })
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true }) title: string,
        @Arg('body', () => String, { nullable: true }) body: string,
        @Arg('description', () => String, { nullable: true }) description: string,
        @Ctx() { em }: MyContext
    ): Promise<Post | null> {
        const post = await em.findOne(Post, { id });
        if (!post) {
            return null;
        }
        if (typeof title != 'undefined') {
            post.title = title;
        }
        if (typeof body != 'undefined') {
            post.body = body;
        }
        if (typeof description != 'undefined') {
            post.description = description;
        }

        await em.persistAndFlush(post)
        return post;
    }


    @Mutation(() => Boolean)
    async deletePost(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext
    ): Promise<boolean> {
        try {
            await em.nativeDelete(Post, { id });
            return true;
        } catch (e) {
            return false;
        }
    }
}

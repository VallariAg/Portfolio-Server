import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";

//schema
@ObjectType()
@Entity()
export class Timeline {

    @Field()
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ type: "date" })
    time = new Date();

    @Field()
    @Property({ type: "text" })
    title!: string;

    @Field()
    @Property({ type: "text", nullable: true })
    body: string;

    @Field()
    @Property({ type: "text", nullable: true })
    description: string;

}

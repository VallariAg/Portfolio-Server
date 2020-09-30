import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ type: "text" })
    title!: string;

    @Property({ type: "text", nullable: true })
    body: string;

    @Property({ type: "text", nullable: true })
    description: string;

}

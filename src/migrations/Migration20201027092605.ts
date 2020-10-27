import { Migration } from '@mikro-orm/migrations';

export class Migration20201027092605 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "timeline" ("id" serial primary key, "time" timestamptz(0) not null, "title" text not null, "body" text null, "description" text null);');
  }

}

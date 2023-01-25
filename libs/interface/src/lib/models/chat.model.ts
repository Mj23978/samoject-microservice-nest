import { Field, ObjectType } from "@nestjs/graphql";
import { ChatCount } from "../outputs/ChatCount";
import { Message } from "./message.model";
import { Project } from "./project.model";
import { Space } from "./space.model";
import { Task } from "./task.model";
import { User } from "./user.model";

@ObjectType("Chat", {
  isAbstract: true
})
export class Chat {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  messages?: Message[];

  Project?: Project | null;

  Space?: Space | null;

  Task?: Task | null;

  User?: User | null;

  @Field(() => ChatCount, {
    nullable: true
  })
  _count?: ChatCount | null;
}

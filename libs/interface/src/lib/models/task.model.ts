import { Field, ObjectType } from "@nestjs/graphql";
import { TaskCount } from "../outputs/TaskCount";
import { Chat } from "./chat.model";
import { Project } from "./project.model";
import { UserAssignedTasks } from "./user-assigned-tasks.model";
import { User } from "./user.model";

@ObjectType("Task", {
  isAbstract: true
})
export class Task {
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

  @Field(() => String, {
    nullable: true
  })
  projectId?: string | null;

  @Field(() => String, {
    nullable: true
  })
  creatorId?: string | null;

  @Field(() => String, {
    nullable: true
  })
  parentId?: string | null;

  @Field(() => String, {
    nullable: false
  })
  status!: string;

  @Field(() => String, {
    nullable: false
  })
  details!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | null;

  chat?: Chat | null;

  creator?: User | null;

  parent?: Task | null;

  project?: Project | null;

  subTasks?: Task[];

  assignes?: UserAssignedTasks[];

  @Field(() => TaskCount, {
    nullable: true
  })
  _count?: TaskCount | null;
}

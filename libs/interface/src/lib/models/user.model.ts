import { Field, ObjectType } from "@nestjs/graphql";
import { Role } from "../enums/Role";
import { UserCount } from "../outputs/UserCount";
import { Chat } from "./chat.model";
import { Message } from "./message.model";
import { Project } from "./project.model";
import { ProjectsOnUsers } from "./projects-on-users.model";
import { Task } from "./task.model";
import { UserAssignedTasks } from "./user-assigned-tasks.model";
import { Workspace } from "./workspace.model";

@ObjectType("User", {
  isAbstract: true
})
export class User {
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
    nullable: false
  })
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => String, {
    nullable: true
  })
  firstname?: string | null;

  @Field(() => String, {
    nullable: true
  })
  lastname?: string | null;

  @Field(() => String, {
    nullable: false
  })
  username!: string;

  @Field(() => Boolean, {
    nullable: false
  })
  active!: boolean;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | null;

  @Field(() => Role, {
    nullable: false
  })
  role!: "ADMIN" | "USER";

  chat?: Chat | null;

  comments?: Message[];

  ownedProjects?: Project[];

  projects?: ProjectsOnUsers[];

  createdTasks?: Task[];

  assignedTasks?: UserAssignedTasks[];

  workspaces?: Workspace | null;

  User_B?: User[];

  User_A?: User[];

  @Field(() => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}

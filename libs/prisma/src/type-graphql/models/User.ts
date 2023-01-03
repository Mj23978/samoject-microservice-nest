import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Chat } from "../models/Chat";
import { Message } from "../models/Message";
import { Project } from "../models/Project";
import { ProjectsOnUsers } from "../models/ProjectsOnUsers";
import { Task } from "../models/Task";
import { UserAssignedTasks } from "../models/UserAssignedTasks";
import { Workspace } from "../models/Workspace";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstname?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastname?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId?: string | null;

  @TypeGraphQL.Field(_type => Role, {
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

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}

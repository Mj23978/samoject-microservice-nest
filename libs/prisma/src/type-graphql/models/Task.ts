import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Chat } from "../models/Chat";
import { Project } from "../models/Project";
import { User } from "../models/User";
import { UserAssignedTasks } from "../models/UserAssignedTasks";
import { TaskCount } from "../resolvers/outputs/TaskCount";

@TypeGraphQL.ObjectType("Task", {
  isAbstract: true
})
export class Task {
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
    nullable: true
  })
  projectId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  details!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId?: string | null;

  chat?: Chat | null;

  creator?: User | null;

  parent?: Task | null;

  project?: Project | null;

  subTasks?: Task[];

  assignes?: UserAssignedTasks[];

  @TypeGraphQL.Field(_type => TaskCount, {
    nullable: true
  })
  _count?: TaskCount | null;
}

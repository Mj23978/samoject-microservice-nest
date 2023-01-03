import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Task } from "../models/Task";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("UserAssignedTasks", {
  isAbstract: true
})
export class UserAssignedTasks {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

  task?: Task;

  user?: User;
}

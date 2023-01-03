import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutSubTasksInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutSubTasksInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutSubTasksInput, {
    nullable: false
  })
  create!: TaskCreateWithoutSubTasksInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutProjectInput } from "../inputs/TaskCreateWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TaskCreateWithoutProjectInput;
}

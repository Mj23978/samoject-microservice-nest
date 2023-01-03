import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutAssignesInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutAssignesInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAssignesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssignesInput;
}

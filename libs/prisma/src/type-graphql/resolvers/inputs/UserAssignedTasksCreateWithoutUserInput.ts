import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutAssignesInput } from "../inputs/TaskCreateNestedOneWithoutAssignesInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAssignesInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutAssignesInput;
}

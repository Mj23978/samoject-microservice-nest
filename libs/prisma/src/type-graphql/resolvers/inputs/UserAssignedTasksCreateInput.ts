import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutAssignesInput } from "../inputs/TaskCreateNestedOneWithoutAssignesInput";
import { UserCreateNestedOneWithoutAssignedTasksInput } from "../inputs/UserCreateNestedOneWithoutAssignedTasksInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssignedTasksInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAssignedTasksInput;
}

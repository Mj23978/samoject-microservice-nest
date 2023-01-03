import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAssignedTasksInput } from "../inputs/UserCreateNestedOneWithoutAssignedTasksInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateWithoutTaskInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssignedTasksInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAssignedTasksInput;
}

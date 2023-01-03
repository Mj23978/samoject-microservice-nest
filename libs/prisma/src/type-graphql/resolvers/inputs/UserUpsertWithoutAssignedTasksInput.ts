import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserUpdateWithoutAssignedTasksInput } from "../inputs/UserUpdateWithoutAssignedTasksInput";

@TypeGraphQL.InputType("UserUpsertWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserUpsertWithoutAssignedTasksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAssignedTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAssignedTasksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssignedTasksInput;
}

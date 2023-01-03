import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserUpdateWithoutCreatedTasksInput } from "../inputs/UserUpdateWithoutCreatedTasksInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserUpsertWithoutCreatedTasksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedTasksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedTasksInput;
}

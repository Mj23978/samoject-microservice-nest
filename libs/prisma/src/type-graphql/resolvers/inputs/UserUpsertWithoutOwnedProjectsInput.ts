import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserUpdateWithoutOwnedProjectsInput } from "../inputs/UserUpdateWithoutOwnedProjectsInput";

@TypeGraphQL.InputType("UserUpsertWithoutOwnedProjectsInput", {
  isAbstract: true
})
export class UserUpsertWithoutOwnedProjectsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnedProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOwnedProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnedProjectsInput;
}

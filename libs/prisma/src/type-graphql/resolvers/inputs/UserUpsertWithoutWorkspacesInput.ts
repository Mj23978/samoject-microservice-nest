import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserUpdateWithoutWorkspacesInput } from "../inputs/UserUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("UserUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class UserUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: UserCreateWithoutWorkspacesInput;
}

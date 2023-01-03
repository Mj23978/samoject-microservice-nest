import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserUpdateWithoutChatInput } from "../inputs/UserUpdateWithoutChatInput";

@TypeGraphQL.InputType("UserUpsertWithoutChatInput", {
  isAbstract: true
})
export class UserUpsertWithoutChatInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutChatInput, {
    nullable: false
  })
  update!: UserUpdateWithoutChatInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChatInput, {
    nullable: false
  })
  create!: UserCreateWithoutChatInput;
}

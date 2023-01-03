import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserUpdateWithoutUser_AInput } from "../inputs/UserUpdateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutUser_AInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutUser_AInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_AInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_AInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_AInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_AInput;
}

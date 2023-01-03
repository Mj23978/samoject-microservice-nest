import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUser_BInput } from "../inputs/UserUpdateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutUser_BInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutUser_BInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_BInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUser_BInput;
}

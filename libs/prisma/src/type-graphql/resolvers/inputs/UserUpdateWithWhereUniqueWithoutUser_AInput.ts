import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUser_AInput } from "../inputs/UserUpdateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutUser_AInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutUser_AInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_AInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUser_AInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUser_AInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUser_AInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_AInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_AInput;
}

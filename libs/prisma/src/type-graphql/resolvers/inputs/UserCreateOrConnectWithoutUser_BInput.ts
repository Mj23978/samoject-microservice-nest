import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUser_BInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUser_BInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_BInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_BInput;
}

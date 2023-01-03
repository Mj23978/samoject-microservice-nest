import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_BInput } from "../inputs/UserCreateOrConnectWithoutUser_BInput";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutUser_BInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutUser_BInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUser_BInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUser_BInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

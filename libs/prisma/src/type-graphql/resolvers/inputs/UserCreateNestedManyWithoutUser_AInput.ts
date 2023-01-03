import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_AInput } from "../inputs/UserCreateOrConnectWithoutUser_AInput";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutUser_AInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutUser_AInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUser_AInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUser_AInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

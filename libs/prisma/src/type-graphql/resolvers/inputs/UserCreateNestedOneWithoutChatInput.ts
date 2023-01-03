import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChatInput } from "../inputs/UserCreateOrConnectWithoutChatInput";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutChatInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChatInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

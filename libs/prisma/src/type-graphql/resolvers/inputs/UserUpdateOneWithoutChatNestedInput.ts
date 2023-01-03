import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChatInput } from "../inputs/UserCreateOrConnectWithoutChatInput";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserUpdateWithoutChatInput } from "../inputs/UserUpdateWithoutChatInput";
import { UserUpsertWithoutChatInput } from "../inputs/UserUpsertWithoutChatInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutChatNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChatInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChatInput, {
    nullable: true
  })
  update?: UserUpdateWithoutChatInput | undefined;
}

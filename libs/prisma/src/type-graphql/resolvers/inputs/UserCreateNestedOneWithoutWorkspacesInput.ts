import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWorkspacesInput } from "../inputs/UserCreateOrConnectWithoutWorkspacesInput";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

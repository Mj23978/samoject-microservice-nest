import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwnedProjectsInput } from "../inputs/UserCreateOrConnectWithoutOwnedProjectsInput";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserUpdateWithoutOwnedProjectsInput } from "../inputs/UserUpdateWithoutOwnedProjectsInput";
import { UserUpsertWithoutOwnedProjectsInput } from "../inputs/UserUpsertWithoutOwnedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutOwnedProjectsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOwnedProjectsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnedProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOwnedProjectsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOwnedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnedProjectsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOwnedProjectsInput | undefined;
}

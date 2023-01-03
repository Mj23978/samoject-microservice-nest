import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedTasksInput } from "../inputs/UserCreateOrConnectWithoutCreatedTasksInput";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserUpdateWithoutCreatedTasksInput } from "../inputs/UserUpdateWithoutCreatedTasksInput";
import { UserUpsertWithoutCreatedTasksInput } from "../inputs/UserUpsertWithoutCreatedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCreatedTasksNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCreatedTasksNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedTasksInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedTasksInput | undefined;
}

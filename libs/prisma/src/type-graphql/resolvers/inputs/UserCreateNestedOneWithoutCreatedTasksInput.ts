import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedTasksInput } from "../inputs/UserCreateOrConnectWithoutCreatedTasksInput";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssignedTasksInput } from "../inputs/UserCreateOrConnectWithoutAssignedTasksInput";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutAssignedTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssignedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssignedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

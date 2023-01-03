import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssignedTasksInput } from "../inputs/UserCreateOrConnectWithoutAssignedTasksInput";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserUpdateWithoutAssignedTasksInput } from "../inputs/UserUpdateWithoutAssignedTasksInput";
import { UserUpsertWithoutAssignedTasksInput } from "../inputs/UserUpsertWithoutAssignedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAssignedTasksNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutAssignedTasksNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssignedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssignedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAssignedTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAssignedTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAssignedTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAssignedTasksInput | undefined;
}

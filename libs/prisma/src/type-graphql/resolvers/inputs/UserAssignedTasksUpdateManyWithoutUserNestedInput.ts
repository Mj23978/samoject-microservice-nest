import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateManyUserInputEnvelope } from "../inputs/UserAssignedTasksCreateManyUserInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutUserInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutUserInput";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyWithWhereWithoutUserInput } from "../inputs/UserAssignedTasksUpdateManyWithWhereWithoutUserInput";
import { UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput";
import { UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  set?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  delete?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  connect?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserAssignedTasksUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserAssignedTasksScalarWhereInput[] | undefined;
}

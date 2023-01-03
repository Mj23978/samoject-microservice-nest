import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateManyTaskInputEnvelope } from "../inputs/UserAssignedTasksCreateManyTaskInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutTaskInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutTaskInput";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyWithWhereWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateManyWithWhereWithoutTaskInput";
import { UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput";
import { UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksUpdateManyWithoutTaskNestedInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateWithoutTaskInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyTaskInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: UserAssignedTasksUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserAssignedTasksScalarWhereInput[] | undefined;
}

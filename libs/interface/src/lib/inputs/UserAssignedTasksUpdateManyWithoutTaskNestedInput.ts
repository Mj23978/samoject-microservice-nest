import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateManyTaskInputEnvelope } from "../inputs/UserAssignedTasksCreateManyTaskInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutTaskInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutTaskInput";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyWithWhereWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateManyWithWhereWithoutTaskInput";
import { UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput";
import { UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksUpdateManyWithoutTaskNestedInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithoutTaskNestedInput {
  @Field(() => [UserAssignedTasksCreateWithoutTaskInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutTaskInput[] | undefined;

  @Field(() => [UserAssignedTasksCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutTaskInput[] | undefined;

  @Field(() => [UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @Field(() => UserAssignedTasksCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyTaskInputEnvelope | undefined;

  @Field(() => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  set?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @Field(() => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @Field(() => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  delete?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @Field(() => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  connect?: UserAssignedTasksWhereUniqueInput[] | undefined;

  @Field(() => [UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @Field(() => [UserAssignedTasksUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: UserAssignedTasksUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserAssignedTasksScalarWhereInput[] | undefined;
}

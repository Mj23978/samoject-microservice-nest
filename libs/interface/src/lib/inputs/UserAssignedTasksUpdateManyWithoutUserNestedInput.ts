import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateManyUserInputEnvelope } from "../inputs/UserAssignedTasksCreateManyUserInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutUserInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutUserInput";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyWithWhereWithoutUserInput } from "../inputs/UserAssignedTasksUpdateManyWithWhereWithoutUserInput";
import { UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput";
import { UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithoutUserNestedInput {
  @Field(() => [UserAssignedTasksCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutUserInput[] | undefined;

  @Field(() => [UserAssignedTasksCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutUserInput[] | undefined;

  @Field(() => [UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @Field(() => UserAssignedTasksCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyUserInputEnvelope | undefined;

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

  @Field(() => [UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @Field(() => [UserAssignedTasksUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserAssignedTasksUpdateManyWithWhereWithoutUserInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserAssignedTasksScalarWhereInput[] | undefined;
}

import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateManyUserInputEnvelope } from "../inputs/UserAssignedTasksCreateManyUserInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutUserInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutUserInput";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateNestedManyWithoutUserInput {
  @Field(() => [UserAssignedTasksCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutUserInput[] | undefined;

  @Field(() => [UserAssignedTasksCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutUserInput[] | undefined;

  @Field(() => UserAssignedTasksCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyUserInputEnvelope | undefined;

  @Field(() => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  connect?: UserAssignedTasksWhereUniqueInput[] | undefined;
}

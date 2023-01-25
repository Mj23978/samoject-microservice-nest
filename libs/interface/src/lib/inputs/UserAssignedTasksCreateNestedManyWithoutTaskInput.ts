import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateManyTaskInputEnvelope } from "../inputs/UserAssignedTasksCreateManyTaskInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutTaskInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutTaskInput";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksCreateNestedManyWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateNestedManyWithoutTaskInput {
  @Field(() => [UserAssignedTasksCreateWithoutTaskInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutTaskInput[] | undefined;

  @Field(() => [UserAssignedTasksCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutTaskInput[] | undefined;

  @Field(() => UserAssignedTasksCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyTaskInputEnvelope | undefined;

  @Field(() => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  connect?: UserAssignedTasksWhereUniqueInput[] | undefined;
}

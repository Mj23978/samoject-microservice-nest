import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateOrConnectWithoutTaskInput {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksCreateWithoutTaskInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutTaskInput;
}

import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateOrConnectWithoutUserInput {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutUserInput;
}

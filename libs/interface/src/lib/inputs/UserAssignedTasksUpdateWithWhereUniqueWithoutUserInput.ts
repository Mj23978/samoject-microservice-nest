import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksUpdateWithoutUserInput } from "../inputs/UserAssignedTasksUpdateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateWithoutUserInput;
}

import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksUpdateWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateWithoutTaskInput;
}

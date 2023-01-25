import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyMutationInput } from "../inputs/UserAssignedTasksUpdateManyMutationInput";

@InputType("UserAssignedTasksUpdateManyWithWhereWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithWhereWithoutTaskInput {
  @Field(() => UserAssignedTasksScalarWhereInput, {
    nullable: false
  })
  where!: UserAssignedTasksScalarWhereInput;

  @Field(() => UserAssignedTasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateManyMutationInput;
}

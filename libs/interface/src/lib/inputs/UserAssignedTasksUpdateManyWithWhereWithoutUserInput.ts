import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyMutationInput } from "../inputs/UserAssignedTasksUpdateManyMutationInput";

@InputType("UserAssignedTasksUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithWhereWithoutUserInput {
  @Field(() => UserAssignedTasksScalarWhereInput, {
    nullable: false
  })
  where!: UserAssignedTasksScalarWhereInput;

  @Field(() => UserAssignedTasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateManyMutationInput;
}

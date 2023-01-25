import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateNestedOneWithoutAssignesInput } from "../inputs/TaskCreateNestedOneWithoutAssignesInput";
import { UserCreateNestedOneWithoutAssignedTasksInput } from "../inputs/UserCreateNestedOneWithoutAssignedTasksInput";

@InputType("UserAssignedTasksCreateInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateInput {
  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  @Field(() => TaskCreateNestedOneWithoutAssignesInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutAssignesInput;

  @Field(() => UserCreateNestedOneWithoutAssignedTasksInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAssignedTasksInput;
}

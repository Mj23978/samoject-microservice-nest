import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateNestedOneWithoutAssignesInput } from "../inputs/TaskCreateNestedOneWithoutAssignesInput";

@InputType("UserAssignedTasksCreateWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateWithoutUserInput {
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
}

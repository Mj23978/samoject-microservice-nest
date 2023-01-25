import { Field, InputType } from "@nestjs/graphql";
import { UserCreateNestedOneWithoutAssignedTasksInput } from "../inputs/UserCreateNestedOneWithoutAssignedTasksInput";

@InputType("UserAssignedTasksCreateWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateWithoutTaskInput {
  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  @Field(() => UserCreateNestedOneWithoutAssignedTasksInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAssignedTasksInput;
}

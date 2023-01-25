import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserUpdateWithoutAssignedTasksInput } from "../inputs/UserUpdateWithoutAssignedTasksInput";

@InputType("UserUpsertWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserUpsertWithoutAssignedTasksInput {
  @Field(() => UserUpdateWithoutAssignedTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAssignedTasksInput;

  @Field(() => UserCreateWithoutAssignedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssignedTasksInput;
}

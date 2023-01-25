import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserUpdateWithoutCreatedTasksInput } from "../inputs/UserUpdateWithoutCreatedTasksInput";

@InputType("UserUpsertWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserUpsertWithoutCreatedTasksInput {
  @Field(() => UserUpdateWithoutCreatedTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedTasksInput;

  @Field(() => UserCreateWithoutCreatedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedTasksInput;
}

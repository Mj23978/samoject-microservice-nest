import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksUpdateWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: UserAssignedTasksUpdateWithoutTaskInput;

  @Field(() => UserAssignedTasksCreateWithoutTaskInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutTaskInput;
}

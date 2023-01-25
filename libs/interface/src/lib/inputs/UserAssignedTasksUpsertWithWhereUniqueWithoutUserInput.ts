import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksUpdateWithoutUserInput } from "../inputs/UserAssignedTasksUpdateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@InputType("UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserAssignedTasksUpdateWithoutUserInput;

  @Field(() => UserAssignedTasksCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutUserInput;
}

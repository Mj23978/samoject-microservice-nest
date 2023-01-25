import { UserAssignedTasksCreateInput } from "../../../inputs/UserAssignedTasksCreateInput";
import { UserAssignedTasksUpdateInput } from "../../../inputs/UserAssignedTasksUpdateInput";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserAssignedTasksArgs {
  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @Field(() => UserAssignedTasksCreateInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateInput;

  @Field(() => UserAssignedTasksUpdateInput, {
    nullable: false
  })
  update!: UserAssignedTasksUpdateInput;
}

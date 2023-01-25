import { UserAssignedTasksUpdateInput } from "../../../inputs/UserAssignedTasksUpdateInput";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserAssignedTasksArgs {
  @Field(() => UserAssignedTasksUpdateInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateInput;

  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;
}

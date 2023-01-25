import { UserAssignedTasksUpdateManyMutationInput } from "../../../inputs/UserAssignedTasksUpdateManyMutationInput";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserAssignedTasksArgs {
  @Field(() => UserAssignedTasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateManyMutationInput;

  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;
}

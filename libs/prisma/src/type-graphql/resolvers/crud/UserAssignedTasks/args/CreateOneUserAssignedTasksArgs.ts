import { UserAssignedTasksCreateInput } from "../../../inputs/UserAssignedTasksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserAssignedTasksArgs {
  @Field(() => UserAssignedTasksCreateInput, {
    nullable: false
  })
  data!: UserAssignedTasksCreateInput;
}

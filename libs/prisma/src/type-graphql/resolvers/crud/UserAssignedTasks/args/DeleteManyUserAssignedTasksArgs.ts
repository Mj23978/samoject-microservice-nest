import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserAssignedTasksArgs {
  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;
}
